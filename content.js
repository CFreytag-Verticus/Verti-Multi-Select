chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("request:", request, "\n sender:", sender);
    if (request.action == "selectOptions") {
        const selectElement = document.getElementById(request.selectId);
        selectOptionsByRegex(selectElement, request.regexPattern);
    }
    sendResponse({ fromcontent: "This message is from content.js" });
});

function selectOptionsByRegex(selectElement, regexPattern) {
    const regex = new RegExp(regexPattern);
    const options = selectElement.options;

    for (let i = 0; i < options.length; i++) {
        if (regex.test(options[i].text)) {
            options[i].selected = true;
        } else {
            options[i].selected = false;
        }
    }
}
