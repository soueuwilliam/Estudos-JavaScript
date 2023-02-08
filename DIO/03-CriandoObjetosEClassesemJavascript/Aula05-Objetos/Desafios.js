/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
class carro {
    marca
    cor
    kmporlitro
    constructor(marca, cor, kmPorLitro) {
        this.marca = marca
        this.cor = cor
        this.kmporlitro = kmPorLitro
    }

    custodepercusso($combustivel, distancia) {
        const custo = (distancia / this.kmporlitro) * $combustivel

        console.log(`O custada viagem será $ ${custo.toFixed(2)}`)
    }
}

const carro1 = new carro('ford', 'preta', 12)
carro1.custodepercusso(5, 70)
/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    imc() {
        const imc = this.peso / Math.pow(this.altura, 2)
        if (imc < 18.5) {
            console.log(`imc : ${imc.toFixed(2)} situação: abaixo do peso`)
        } else if (imc <= 25) {
            console.log(`imc : ${imc.toFixed(2)} situação: peso normal`)
        } else if (imc <= 30) {
            console.log(`imc : ${imc.toFixed(2)} situação: acima do peso`)
        } else if (imc <= 40) {
            console.log(`imc : ${imc.toFixed(2)} situação: obeso`)
        } else {
            console.log(`imc : ${imc.toFixed(2)} situação: obesidade grave`)
        }
    }
}

let pessoa1 = new pessoa('William', 104, 1.81)

pessoa1.imc(pessoa1.peso, pessoa1.altura)