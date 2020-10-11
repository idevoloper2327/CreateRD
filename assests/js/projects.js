window.onscroll = function() {scrollFunction()};

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
        document.getElementById("menu-P").style.top = "0";
        } else {
        document.getElementById("menu-P").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
}
