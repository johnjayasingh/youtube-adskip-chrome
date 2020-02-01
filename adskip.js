setInterval(() => {
    const adSkip = document.getElementsByClassName('ytp-ad-skip-button');
    const overlayAds = document.getElementsByClassName('ytp-ad-overlay-container');
    const ads = document.getElementsByClassName('adDisplay');
    const googleView = document.getElementsByClassName('GoogleActiveViewClass');

    const playerAds = document.getElementById('player-ads')
    const googleCompanion = document.getElementById('google_companion_ad_div');
    const homeAd = document.getElementById('masthead-ad');
    const offer = document.getElementById('offer-module');
    const movieOffer = document.getElementById('ytd-movie-offer-module-renderer');

    const iterations = Math.max([adSkip.length, overlayAds.length, ads.length, googleView.length])

    for (let i = 0; i < iterations; i++) {
        if (adSkip[i]) {
            adSkip[i].click();
        }
        if (ads[i]) {
            ads[i].style.display = "none";
        }
        if (googleView[i]) {
            googleView[i].style.display = "none";
        }
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
