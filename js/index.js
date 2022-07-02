var slide = document.getElementsByClassName("c-slider-container__slide");
var sliderl = document.getElementsByClassName("c-slider-container__slider");
var image = document.getElementsByClassName("c-slider-container__image");
var indice = 0;

function slider(indice){
    var j = 0;
    for(let i=0;i<=3;i++){
        if(indice+i <= indice+2){
            if(indice+i > 5){
                slide[j].style.display = "block";
                slide[j].style.order = "3";
                image[j].style.display = "block"; 
                image[j].style.order = "3";
                j++;   
            }else{
            slide[indice+i].style.display = "block";
            image[indice+i].style.display = "block";
            }
        }
    }


}




/*function slider(recorrido){
    var cartastotales = 5; //el 0 tambien cuenta
    for(let i=0;i<=cartastotales;i++){
        if((i+recorrido) < (recorrido+3)){
            if(i+recorrido > cartastotales){
                slide[(i+recorrido)-(cartastotales+1)].style.display = "block";
                slide[(i+recorrido)-(cartastotales+1)].style.order = ((i+recorrido)-(cartastotales+1)+2).toString();
                image[(i+recorrido)-(cartastotales+1)].style.display = "block";
                image[(i+recorrido)-(cartastotales+1)].style.display = ((i+recorrido)-(cartastotales+1)+2).toString();
            }else{

                slide[i+recorrido].style.display = "block";
                image[i+recorrido].style.display = "block";
                }
            }
        }
    }
    */

function rightarrow(){
    if(indice == 6){
        indice = 0;
    }
    indice+=1;
    slider(indice);
    if(indice != 0){
    slide[indice-1].style.display = "none";
    }else{
    slide[0].style.display = "none";
    }
}

function leftarrow(){
    if(indice == 0){
        indice = 5;
    }else{
    indice-=1;
    }
    slider(indice);
    
}

window.onload = slider(0);


