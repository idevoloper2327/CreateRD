// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("menu-A").style.top = "0";
            } else {
            document.getElementById("menu-A").style.top = "-100px";
            }
        prevScrollpos = currentScrollPos;
    }
}
