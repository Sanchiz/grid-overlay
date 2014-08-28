// popup.js
window.onload = function() {
    document.getElementById("toggle").onclick = function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            this.innerHTML = "Disable";
            chrome.extension.sendMessage({
                type: "enable-grid"
            });
        }
        else {
            this.innerHTML = "Enable";
            this.classList.remove('active');
            chrome.extension.sendMessage({
                type: "disable-grid"
            });
        }
    }
}
