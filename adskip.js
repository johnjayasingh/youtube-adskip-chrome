setInterval(() => {
    const adSkip = document.getElementsByClassName('ytp-ad-skip-button');

    var overlayAds = document.getElementsByClassName('ytp-ad-overlay-container');
    const playerAds = document.getElementById('player-ads')
    const googleCompanion = document.getElementById('google_companion_ad_div');

    const homeAd = document.getElementById('masthead-ad');
    const offer = document.getElementById('offer-module');
    const movieOffer = document.getElementById('ytd-movie-offer-module-renderer');
    const ads = document.getElementsByClassName('adDisplay');
    const googleView = document.getElementsByClassName('GoogleActiveViewClass');

    for (let i = 0; i < adSkip.length; i++) {
        adSkip[i].click();
        const info = document.getElementById('info-skeleton');
        info.innerHTML = '';
    }

    for (let i = 0; i < ads.length; i++) {
        ads[i].style.display = "none";
        const info = document.getElementById('info-skeleton');
        info.innerHTML = '';
    }

    for (var i = 0; i < overlayAds.length; i++) {
        overlayAds[i].innerHTML = "";
    }


    for (let i = 0; i < googleView.length; i++) {
        googleView[i].style.display = "none";
    }

    if (playerAds) {
        playerAds.innerHTML = "";
    }

    if (googleCompanion) {
        googleCompanion.innerHTML = "";
    }

    if (offer) {
        offer.innerHTML = '';
    }

    if (movieOffer) {
        movieOffer.innerHTML = '';
    }

    if (homeAd) {
        homeAd.innerHTML = '';
    }

}, 1000);
