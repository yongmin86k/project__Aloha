//--------------------------------------------
// Detect the broswer
const isBrowser =
    (navigator.userAgent.indexOf('Opera') != -1 || navigator.userAgent.indexOf('OPR') != -1) ? 'Opera' :
        (navigator.userAgent.indexOf("Chrome") != -1) ? 'Chrome' :
            (navigator.userAgent.indexOf("Safari") != -1) ? 'Safari' :
                (navigator.userAgent.indexOf("Firefox") != -1) ? 'Firefox' :
                    (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) ? 'IE' : 'unknown';

// JS :: smooth scrolling
browser.forEach(res => {
    if (isBrowser === res) {
        const ele = document.getElementById('main-nav').children[0].children,
            home = document.querySelector('.menu-element.logo').children[0].children;
        
        // click MENU LIST to go to the link
        for (const child_element of ele) {
            child_element.addEventListener('click', function (e) {

                let curTime = 0, posY = 0,
                    nav_margin = document.getElementsByTagName('header')[0].offsetHeight,
                    link, curY, toY;

                e.preventDefault();
                link = e.target.hash.replace('#', '');
                curY = window.scrollY;
                toY = document.getElementById(link).offsetTop;
                for (curTime = 0; curTime < setTime; curTime++) {
                    setTimeout(function () {
                        posY += (toY - curY - nav_margin) / setTime;
                        window.scrollTo(0, curY + posY);
                    }, curTime);
                }
            });
        }

        // click LOGO to the TOP
        for (const child_element of home) {
            child_element.addEventListener('click', function (e) {

                let curTime = 0,
                    posY = 0,
                    curY, toY;

                e.preventDefault();
                curY = window.scrollY;
                toY = 0;
                for (curTime = 0; curTime < setTime; curTime++) {
                    setTimeout(function () {
                        posY += (toY - curY) / setTime;
                        window.scrollTo(0, curY + posY);
                    }, curTime);
                }
            });
        }
    }
});