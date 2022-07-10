var slider_cont = document.getElementsByClassName("c-slider-container__slides");
var slide = document.getElementsByClassName("c-slider-container__slide-two");
var image = document.getElementsByClassName("c-slider-container__image-two");
var items = slider_cont[0].getElementsByTagName("div").length;
var items_show = 3;
var items_not_show = items - items_show;
var indice = 0;
var x = 1;
var letter = [0,0];
var click = true;

function slider(identify){
    slider_cont[identify].innerHTML += slider_cont[identify].innerHTML + slider_cont[identify].innerHTML;
    if((items % 2) == 0){
        var c = slide[0];
        var clon = c.cloneNode(true);
        slider_cont[identify].appendChild(clon);
    }
}

function activatesliders(){
    setTimeout(function() {  
        slider(0);
        slider(1);
    }, 160);
}

function moveLeft(identify){
        if(slider_cont[identify].clientWidth > 350){
        for(let i = 1; i<= 30;i++){
            letter[identify] -= 1.111111;
            document.getElementsByClassName("c-slider-container__slider")[identify].style.transform = "translateX("+ letter[identify] + "%)";
        }
        i = 0;

        }else{
        for(let i = 1; i<= 10;i++){
            letter[identify] -= 10;
            document.getElementsByClassName("c-slider-container__slider")[identify].style.transform = "translateX("+ letter[identify] + "%)";
            }
            i = 0; 
        }
}
function moveRight(identify){
    if(slider_cont[identify].clientWidth > 350){
        console.log("NUUUU");
    for(let i = 1; i<= 30;i++){
        letter[identify] += 1.111111;
        document.getElementsByClassName("c-slider-container__slider")[identify].style.transform = "translateX("+ letter[identify] + "%)";
    }
    i = 0;
    }else{
        for(let i = 1; i<= 10;i++){
            letter[identify] += 10;
            document.getElementsByClassName("c-slider-container__slider")[identify].style.transform = "translateX("+ letter[identify] + "%)";
        }  
    }
}

function aparecer(identify){
    document.getElementsByClassName("c-slider-container__slider")[identify].style.transitionDuration = "0s";
    document.getElementsByClassName("c-slider-container__slider")[identify].style.transform = "translateX(0px)";
    setTimeout(function() {  
        document.getElementsByClassName("c-slider-container__slider")[identify].style.transitionDuration = "0.3s";
    }, 100);
    letter[identify] = 0;
}

function aparecerdos(identify){
    document.getElementsByClassName("c-slider-container__slider")[identify].style.transitionDuration = "0s";
    document.getElementsByClassName("c-slider-container__slider")[identify].style.transform = "translateX(0)";
    setTimeout(function() {  
        document.getElementsByClassName("c-slider-container__slider")[identify].style.transitionDuration = "0.3s";
    }, 100);
    letter[identify] = 0;
}


function rightarrow(identify){
    ++x;
    moveLeft(identify);
    if(x>=7){
        setTimeout(function() {  
            aparecer(identify);
        }, 460);
        x=1;
    }
}

function leftarrow(identify){
    --x;
    moveRight(identify);
    if(x<=-5){
        setTimeout(function() {  
            aparecerdos(identify);
        }, 460);
        x=1;
    }
}

window.onload = activatesliders();

document.getElementsByClassName("c-slider-container__left-arrow")[0].onclick = function(){
    document.getElementsByClassName("c-slider-container__left-arrow")[0].disabled = true;
    leftarrow(0);
    setTimeout(function() {  
        document.getElementsByClassName("c-slider-container__left-arrow")[0].disabled = false;
    }, 1000);
}
document.getElementsByClassName("c-slider-container__right-arrow")[0].onclick = function(){
    document.getElementsByClassName("c-slider-container__right-arrow")[0].disabled = true;
    rightarrow(0);
    setTimeout(function() {  
        document.getElementsByClassName("c-slider-container__right-arrow")[0].disabled = false;
    }, 1000);
}

document.getElementsByClassName("c-slider-container__left-arrow")[1].onclick = function(){
    document.getElementsByClassName("c-slider-container__left-arrow")[1].disabled = true;
    leftarrow(1);
    setTimeout(function() {  
        document.getElementsByClassName("c-slider-container__left-arrow")[1].disabled = false;
    }, 1000);
}
document.getElementsByClassName("c-slider-container__right-arrow")[1].onclick = function(){
    document.getElementsByClassName("c-slider-container__right-arrow")[1].disabled = true;
    rightarrow(1);
    setTimeout(function() {  
        document.getElementsByClassName("c-slider-container__right-arrow")[1].disabled = false;
    }, 1000);
}