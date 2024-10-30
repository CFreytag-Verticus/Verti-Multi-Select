

document
    .getElementById("regexForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const selectId = document.getElementById("selectId").value;
        const regexPattern = document.getElementById("regexPattern").value;
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                console.log("tabs:", tabs);
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        action: "selectOptions",
                        selectId: selectId,
                        regexPattern: regexPattern,
                    },
                    function (response) {
                        console.log(response);
                        if (response.status === "success") {
                            statusMessage.textContent =
                                "Optionen erfolgreich ausgewählt!";
                        } else {
                            statusMessage.textContent = `Fehler: ${response.message}`;
                        }
                    }
                );
            }
        );
    });
