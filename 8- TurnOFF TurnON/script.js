function TurnOnOff(){
    var image = document.getElementById("img");

    if(image.src.match('OFF')){
        image.src = 'img/ONLampada.jpg';
    } else {
        image.src= 'img/OFFLampada.jpg';
    }
}



 /* Invocador a função acima para funcionar em um botão */
function OnOffB(){
    TurnOnOff();
}