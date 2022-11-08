function GetMonths() {
    var d = document.getElementById('Dates').value;

    switch (new Date(d).getMonth()) {
        case 0:
            month = "January – Janeiro";
            break;
        case 1:
            month = "February – Fevereiro";
            break;
        case 2:
            month = "March – Março";
            break;
        case 3:
            month = "April – Abril";
            break;
        case 4:
            month = "May – Maio";
            break;
        case 5:
            month = "June – Junho";
        case 6:
            month = "July – Julho";
            break;
        case 7:
            month = "August – Agosto";
            break;
        case 8:
            month = "September – Setembro";
            break;
        case 9:
            month = "October – Outubro";
            break;
        case 10:
            month = "November – Novembro";
            break;
        case 11:
            month = "December – Dezembro";
            break;
    }

    document.getElementById("dem").innerHTML = "O mês selecionado é: " + month
}