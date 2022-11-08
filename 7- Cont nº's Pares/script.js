function Start(nMAX) {
    var qtdPares = 0;
    var cont = 0;
    while (cont <= nMAX) {
        var resto = cont % 2;
        if (resto == 0) {
            qtdPares = qtdPares + 1
            console.log("Par " + cont);
        }
        cont = cont + 1;
    }
    
    console.log("Valor total de nºs pares é: " + qtdPares)
}

/* Feito em aula com o James*/
function Start2(){
    var nMAX = parseInt(document.getElementById('pares').value);
    Start(nMAX);
    /* O parâmetro de entrada está sendo passado por um INPUT no HTML*/
    /* A função Start está sendo invocada posteriormente e se replicando*/
    
}