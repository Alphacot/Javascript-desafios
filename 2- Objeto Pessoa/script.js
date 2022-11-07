function cadPessoa(){

    // Esse código previne que o FORM do HTML faça um "refresh" na página bloqueando o evento
    // Form HTML pelo ID > submit, pois é um evento de FORMS, função para quando o evento em si ocorrer
document.getElementById('form').addEventListener('submit', function(event){

    event.preventDefault() // preventDefault está cancelando o (event) que é o submit do FORMS
})

let fname = document.getElementById('fname').value;
let lname = document.getElementById('lname').value;
let age = document.getElementById('age').value;
let date = document.getElementById('bDate').value;

let person1 = {
    Name: fname, MidleName: lname, Age: age, Birthdate: date
}

console.log(person1)

}