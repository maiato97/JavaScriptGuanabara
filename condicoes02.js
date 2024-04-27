let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)

if (hora > 6 && hora < 11) {
    console.log("Está na hora do café da manhã")
} else if (hora >= 11) {
    console.log("Está na hora do almoço")
} else if (hora > 14) {
    console.log("Está na hora do lanche da tarde")
} else if (hora > 18) {
    console.log("Está na hora do jantar")
} else if (hora > 22 && hora < 23) {
    console.log("Ultima refeição, hora da ceia")
} else {
    console.log("Horário inválido")
}


