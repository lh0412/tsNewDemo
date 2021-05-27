"use strict";
function setRootFontSize() {
    var width = document.documentElement.clientWidth, fontSize;
    if (width > 750) {
        width = 750;
    }
    fontSize = (width / 750) * 100;
    // let elem: HTMLElement = document.getElementsByTagName("html")[0];
    // elem.style['fontSize'] = fontSize + "px";
    document.getElementsByTagName("html")[0].style["fontSize"] = fontSize + "px";
}
setRootFontSize();
window.addEventListener("resize", function () {
    setRootFontSize();
}, false);
//# sourceMappingURL=rem.js.map