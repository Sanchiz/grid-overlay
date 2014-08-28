chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "enable-grid":
            // Send message to the content script.
            chrome.tabs.getSelected(null, function(tab){
                chrome.tabs.sendMessage(tab.id, {type: "enable-grid", color: "#F00"});
                // Set badge text.
                chrome.browserAction.setBadgeText({text: "Grid"});
            });
        break;

        case "disable-grid":
            // Send message to the content script.
            chrome.tabs.getSelected(null, function(tab){
                chrome.tabs.sendMessage(tab.id, {type: "disable-grid"});
                // Set badge text.
                chrome.browserAction.setBadgeText({text: ""});
            });
        break;
    }
    return true;
});
