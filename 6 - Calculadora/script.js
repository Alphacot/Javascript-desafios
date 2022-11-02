function Sum (){
    var FNumber = parseInt(document.getElementById('FNumber').value);
    var SNumber = parseInt(document.getElementById('SNumber').value);
    var result = FNumber + SNumber

    alert('A soma entre os números indicados é: ' + result)
}

function Sub (){
    var FNumber = parseInt(document.getElementById('FNumber').value);
    var SNumber = parseInt(document.getElementById('SNumber').value);
    var result = FNumber - SNumber

    alert('A subtração entre os números indicados é: ' + result)
}

function Div (){
    var FNumber = parseInt(document.getElementById('FNumber').value);
    var SNumber = parseInt(document.getElementById('SNumber').value);
    var result = FNumber / SNumber

    alert('A divisão entre os números indicados é: ' + result)
}

function Mult (){
    var FNumber = parseInt(document.getElementById('FNumber').value);
    var SNumber = parseInt(document.getElementById('SNumber').value);
    var result = FNumber * SNumber

    alert('A multiplicação entre os números indicados é: ' + result)
}

function Clear (){
    var FNumber = document.getElementById('FNumber');
    var SNumber = document.getElementById('SNumber');
    
    if (FNumber.value !="" && SNumber.value !="") {
        FNumber.value = "";
        SNumber.value = "";
    }
}