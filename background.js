chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab) {
  let myVideoContainer = document.getElementsByClassName("VideoContainer")[0];
  chrome.storage.sync.get(null, function (result) {
    chrome.tabs.sendMessage(tab.id, result);
  });
}

