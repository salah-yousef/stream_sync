chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  const netflixPlayer = document.getElementsByClassName('VideoContainer')[0].firstChild.firstChild.firstChild;
  let currentTime = netflixPlayer.currentTime;
  chrome.storage.sync.set({ key: currentTime });
  let myBody = {
    "id": "1",
    "value": currentTime * 1000
  };
  (async () => {
    const response = await fetch('https://5e39744aaad222001496292e.mockapi.io/currentTime/1', {
      method: 'PUT',
      body: JSON.stringify(myBody), // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  })();
}

