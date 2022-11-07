// A constant C está atribuindo uma nova "data", qual está pegando horário
// O horário está como atualmente vemos > Hora : Minutos : Segundos 
const c = new Date();
document.getElementById("hour").innerHTML = c.getHours() + ":" + c.getMinutes() + ":" + c.getSeconds();

// A constante D1 está atribuindo uma nova data, qual está mostrando a data atual
// A data está como atualmente vemos no Brasil > Dia / Mês / Ano
const d1 = new Date();
document.getElementById("current").innerHTML = (d1.getUTCDate()) + " / " + (d1.getUTCMonth() + 1) + " / "+ (d1.getUTCFullYear());
