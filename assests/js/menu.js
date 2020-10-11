var X = 0;
function conteo(){
    if(document.body.scrollTop==0 || document.documentElement.scrollTop == 0){
        if(X==0){
            document.getElementById("menu").style.background = "rgba(255, 255, 255, 0.973)";

            X++
        }else if(X==1){
            document.getElementById("menu").style.background = "rgba(255, 255, 255, 0)";
            
            X--
        }
    }else {
        if(X==0){
            document.getElementById("menu").style.background = "rgba(255, 255, 255, 0)";
            document.getElementById("menu").style.boxShadow = "none";
            
        }
        if(X==1){
            document.getElementById("menu").style.boxShadow = "none";
            document.getElementById("menu").style.background = "rgba(255, 255, 255, 0.973)!important";
        }
    }
}
  
      
           