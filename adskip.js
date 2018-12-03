setInterval(() => {
    let adSkip = document.getElementsByClassName('ytp-ad-skip-button');
    let adSkip2 = document.getElementsByClassName('videoAdUiSkipButton');

    let miniAd = document.getElementsByClassName('close-padding condensed contains-svg');
    for (var i = 0; i < adSkip.length; i++) {
        adSkip[i].click();
    }
    for (var i = 0; i < adSkip2.length; i++) {
        adSkip2[i].click();
    }
    for (var i = 0; i < miniAd.length; i++) {
        miniAd[i].click();
    }
}, 1000);