function CalularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function calssificarImc(imc) {
    if (imc < 18.5) {
        return `imc : ${imc} situação: abaixo do peso`
    } else if (imc <= 25) {
        return `imc : ${imc} situação: peso normal`
    } else if (imc <= 30) {
        return `imc : ${imc} situação: acima do peso`
    } else if (imc <= 40) {
        return `imc : ${imc} situação: obeso`
    } else {
        return `imc : ${imc} situação: obesidade grave`
    }

}

(function main() {
    console.log('Desafio: IMC')
    const peso = 70
    const altura = 1.70
    const imc = CalularImc(peso, altura)
    console.log(calssificarImc(imc))

})()



