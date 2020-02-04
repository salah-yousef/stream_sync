document.getElementById("host").addEventListener("click", myHostFunction);

function myHostFunction() {
    let params = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        chrome.storage.sync.get(null, function (result) {
            console.log('Host: My Value currently is ' + result.key);
            chrome.tabs.sendMessage(tabs[0].id, 'host');
        });
    }
}

document.getElementById("guest").addEventListener("click", myGuestFunction);

function myGuestFunction() {
    let params = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(params, gotTabs);
    function gotTabs(tabs) {
        chrome.storage.sync.get(null, function (result) {
            console.log('Guest: My Value currently is ' + result.key);
            chrome.tabs.sendMessage(tabs[0].id, 'guest');
        });
    }
}


