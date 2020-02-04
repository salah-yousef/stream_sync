(function () {
    const videoPlayer = window.netflix.appContext.state.playerApp.getAPI().videoPlayer;
    const playerSessionId = videoPlayer.getAllPlayerSessionIds()[0];
    const player = videoPlayer.getVideoPlayerBySessionId(playerSessionId);
    (async () => {
        const response = await fetch('https://5e39744aaad222001496292e.mockapi.io/currentTime', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const myJson = await response.json(); //extract JSON from the http response
        // do something with myJson
        let currentTime = myJson[0].value
        player.seek(currentTime);
    })();
})();