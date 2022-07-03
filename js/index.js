var slide = document.getElementsByClassName("c-slider-container__slide-two");

var image = document.getElementsByClassName("c-slider-container__image-two");

var indice = 0;
var x = 1;
var j = -300;


function aparecer(){
    document.getElementsByClassName("c-slider-container__slides")[0].style.transitionDuration = "0s";
    document.getElementsByClassName("c-slider-container__slides")[0].style.transform = "translateX(-300px)";
    setTimeout(function() {  
        document.getElementsByClassName("c-slider-container__slides")[0].style.transitionDuration = "0.3s";
    }, 100);
    j = -300;
}

function aparecerdos(){
    document.getElementsByClassName("c-slider-container__slides")[0].style.transitionDuration = "0s";
    document.getElementsByClassName("c-slider-container__slides")[0].style.transform = "translateX(-1800px)";
    setTimeout(function() {  
        document.getElementsByClassName("c-slider-container__slides")[0].style.transitionDuration = "0.3s";
    }, 100);
    j = -1800;
}

function desaparecer(param){
    slide[param].style.display="none";
    image[param].style.display="none";
}

function moverse(){
        for(i=1;i<=300;i++){
            document.getElementsByClassName("c-slider-container__slides")[0].style.transform = "translateX("+ j + "px)";
            j--;
        }
}

function moversedos(){
    for(i=1;i<=300;i++){
        document.getElementsByClassName("c-slider-container__slides")[0].style.transform = "translateX(" +j + "px)";
        j++;
    }
}

function rightarrow(){
    ++x;
    moverse();
    if(x>=7){
        setTimeout(function() {  
            aparecer();
        }, 260);
        x=1;
    }
}

function leftarrow(){
    --x;
    moversedos();
    if(x<=0){
        setTimeout(function() {  
            aparecerdos();
        }, 260);
        x=6;
    }
}