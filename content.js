chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message.type) {
        case "enable-grid":
            // @TODO add grid to the DOM.
        break;

        case "disable-grid":
            // @TODO remove grid from the DOM.
        break;
    }
});
