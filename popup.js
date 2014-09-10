// popup.js
window.onload = function() {
    document.getElementById("toggle").onclick = function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            this.innerHTML = "Disable";

            var select = document.getElementById("grid-type");
            var grid_type = select.options[select.selectedIndex].value;

            chrome.extension.sendMessage({
                type: "enable-grid", grid_type: grid_type
            });
        }
        else {
            this.innerHTML = "Enable";
            this.classList.remove('active');
            chrome.extension.sendMessage({
                type: "disable-grid"
            });
        }
    };
};
