// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
window.onscrollc= function() {scrollFunction()};


/*
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("menu").style.background = "black";
      //document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("menu").style.background = "rgba(255, 248, 248, 0)";
      //document.getElementById("logo").style.fontSize = "35px";
    }
}
*/

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("menu").style.top = "0";
      document.getElementById("menu").style.background = "rgba(255, 255, 255, 0.973)";
      document.getElementById("menu").style.boxShadow = "0 4px 8px 0 #273f638e";
      
      var x, i;
      x = document.querySelectorAll(".nav-link-menu");
      for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
      }
     
      //document.getElementsByClassName('nav-link-menu')[].style["color"] = "red";
      

    } else {
      document.getElementById("menu").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos; 
      
  }else{
      document.getElementById("menu").style.background = "rgba(255, 248, 248, 0)";
      document.getElementById("menu").style.boxShadow = "none";
      document.getElementById("menu").style.boxShadow = "none";

      x = document.querySelectorAll(".nav-link-menu");
      for (i = 0; i < x.length; i++) {
        x[i].style.color = "#273f63";
      }
     
      
  }
}

