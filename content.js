chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message.type) {
        case "enable-grid":
            // @TODO add grid to the DOM.
            var grid_type = message.grid_type;
        break;

        case "disable-grid":
            // @TODO remove grid from the DOM.
        break;
    }
});
