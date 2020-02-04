chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  const netflixPlayer = document.getElementsByClassName('VideoContainer')[0].firstChild.firstChild.firstChild;
  let currentTime = netflixPlayer.currentTime;
  chrome.storage.sync.set({ key: currentTime });
  localStorage.setItem('currentTime', currentTime * 1000);
}

