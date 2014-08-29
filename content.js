chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message.type) {
        case "enable-grid":
            // @TODO add grid to the DOM.
            var grid_type = message.grid_type;
            document.body.innerHTML += '<div class="grid-overlay-wrapper"> \
      <div class="grid-overlay-container"> \
            <div class="grid-item"></div> \
            <div class="grid-item"></div> \
            <div class="grid-item"></div> \
            <div class="grid-item"></div> \
            <div class="grid-item"></div> \
            <div class="grid-item"></div> \
            <div class="grid-item"></div> \
            <div class="grid-item"></div> \
            <div class="grid-item"></div> \
            <div class="grid-item"></div> \
            <div class="grid-item"></div> \
            <div class="grid-item"></div> \
      </div> \
    </div>';
        break;

        case "disable-grid":
            // @TODO remove grid from the DOM.
            document.body.removeChild(document.getElementsByClassName('grid-overlay-wrapper')[0]);
        break;
    }
});
