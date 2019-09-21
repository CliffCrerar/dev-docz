
window.onloadend = function () {

    // insertLogoImg()
}


    (function (win, doc) {
        console.log(win)
        console.log(doc);
        win.onload = function () {
            console.log('loadend');
            setImg();
            setClassOnMenuHeading();
        }

        function setImg() {
            let menu = doc.getElementsByClassName('menu')[0]
            let divEl = doc.createElement('div');
            let img = this.document.createElement('img');
            divEl.classList.add('imgDiv');
            divEl.appendChild(img);
            img.setAttribute('src', 'https://cdn-cloudflare.ga/assets/own-logo/logotiny.png');
            menu.prepend(divEl)
        }

        function setClassOnMenuHeading() {
            let el = doc
                .getElementsByClassName('menu-item -level-1')[0]
                .classList.add('main-menu-title');
        }

    }(window, document));
