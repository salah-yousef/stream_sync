// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

(function () {
    console.log('bookmarklet starting');
    console.log(window.netflix);

    const videoPlayer = window.netflix.appContext.state.playerApp.getAPI().videoPlayer;

    // Getting player id
    const playerSessionId = videoPlayer.getAllPlayerSessionIds()[0];

    const player = videoPlayer.getVideoPlayerBySessionId(playerSessionId);

    let currentTime = localStorage.getItem('currentTime');
    player.seek(currentTime);

})();