console.log("Chrome extension host go?");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(window.netflix);
  const videoPlayer = window.netflix.appContext.state.playerApp.getAPI().videoPlayer;

  // Getting player id
  const playerSessionId = videoPlayer.getAllPlayerSessionIds()[0];

  const player = videoPlayer.getVideoPlayerBySessionId(playerSessionId);

  let currentTime = player.getCurrentTime();

  if (message == "host") {
    chrome.storage.sync.set({ key: currentTime });
  } else {
    player.seek(currentTime)
  }
  console.log(message);
  console.log(currentTime);
}

