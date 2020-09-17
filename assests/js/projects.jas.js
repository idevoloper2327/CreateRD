window.onscroll = function() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
        document.getElementById("menu-A").style.top = "0";
        document.getElementById("menu-A").style.background = "rgba(1, 49, 207, 0.9)";

        } else {
        document.getElementById("menu-A").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
}