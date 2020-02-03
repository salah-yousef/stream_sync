

console.log('Chrome extension host go?');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  let myVideoContainer = document.getElementsByClassName("VideoContainer")[0];
  let currentTime = myVideoContainer.firstChild.firstChild.firstChild.currentTime;
  chrome.storage.sync.set({ key: currentTime });
}