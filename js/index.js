
let numeroUm = 1; 
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

//Numero 1
if (numeroUm == stringUm){
    console.log('Isso é um numero');
}
else{
    console.log ('Isso é um texto')
}

//Numero 30

if(numeroTrinta === stringTrinta){
    console.log('Tem o mesmo valor ')
}
else {
        console.log('Não tem o mesmo tipo')
}

//numero 10

if (numeroDez == stringDez){
    console.log('Mesmo valor')
}
else {
    console.log('Valores diferentes ')
}


// const cidade = prompt("Digite a sua cidade:");
// const msg = `Você é de ${cidade}!`;
// alert(msg);

let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');
while(idade !== parseInt(idade).toString()){
    idade = prompt("Dgite apenas números.")
}
let linguagem = prompt ('Digite sua linguagem de programção ');


alert (`Olá  ${nome }, você tem ${idade} anos e já esta aprendendo  ${linguagem}`);


alert(`Você gosta de estudar ${linguagem}?`) ;
let resposta = prompt ("Responda com o número 1 para SIM ou 2 para NÃO");

if (resposta == 1){
    alert (" Muito bom! Continue estudando e você terá muito sucesso.");
}
if (resposta == 2){
     alert("Ahh que pena... Já tentou aprender outras linguagens?");
}

alert ("Já tentou aprender outras linguagens?");
let resposta1 = prompt ("sim ou não");

if(resposta1.toLocaleLowerCase == "sim"){
    alert("Qual linguagem?");
}
if (resposta1.toLocaleLowerCase == "não"){
    alert("Deseja tentar?")
}

