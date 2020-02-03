

console.log('background host running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let myVideoContainer = document.getElementsByClassName("VideoContainer")[0];
  chrome.storage.sync.get(null, function (result) {
    console.log('Host: My Value currently is ' + result.key);
    chrome.tabs.sendMessage(tab.id, myVideoContainer);
  });
}

