// Exemplos if/else
const prompt = require('prompt-sync')()

var vel = 59
console.log(`A velocidade do seu carro é ${vel}Km/h`)
if (vel > 60){
    console.log('Você ultrapassou o limite de velocidade. MULTADO')
} else {
    console.log('Dirija sempre usando cinto de segurança')
}

let pais = prompt('Digite seu pais: ') 
if (pais == 'Brasil') {
    console.log('Brasileiro')
} else {
    console.log('Você é estrangeiro')
}