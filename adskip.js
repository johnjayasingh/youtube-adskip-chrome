setInterval(() => {
    const adsadSkip = document.getElementsByClassName('ytp-ad-skip-button');
    const overlayAds = document.getElementsByClassName('ytp-ad-overlay-container');
    const ads = document.getElementsByClassName('adDisplay');
    const googleView = document.getElementsByClassName('GoogleActiveViewClass');

    const playerAds = document.getElementById('player-ads')
    const googleCompanion = document.getElementById('google_companion_ad_div');
    const homeAd = document.getElementById('masthead-ad');
    const offer = document.getElementById('offer-module');
    const movieOffer = document.getElementById('ytd-movie-offer-module-renderer');

    if (iterations > 1)
        for (let i = 0; i < iterations; i++) {
            if (adSkip[i]) {
                console.log('adskip')
                adSkip[i].click();
            }
            if (ads[i]) {
                console.log('ads')
                ads[i].style.display = "none";
            }
            if (googleView[i]) {
                console.log('googleview')

                googleView[i].style.display = "none";
            }
        }


    if (ads[0]) {
        ads[0].style.display = "none";
    }

    if (googleView[0]) {
        googleView[0].style.display = "none";
    }

    if (adSkip[0]) {
        console.log('skipped a ad - support https://github.com/johnjayasingh')
        adSkip[0].click();
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
