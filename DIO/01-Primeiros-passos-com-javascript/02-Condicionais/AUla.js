/*
==========================================
------------------------------------------
OPERADORES RELACIONAIS
------------------------------------------

    A > B A é maior que B
    A < B A é menor que B
    A >= B  A é maior ou igual que B
    A <= C  A é menor ou igual que B
===========================================
*/
let a = 10
let b = 20
let c = 10
let d = 34

console.log(`${a} é maior que ${b} ? ${a > b}`)
console.log(`${a} é menor que ${b} ? ${a < b}`)
console.log(`${a} é maior ou igual que ${b} ? ${a >= b}`)
console.log(`${c} é menor ou igual que ${d} ? ${c <= d}`)

/*
==========================================
------------------------------------------
CONDICIONAIS
------------------------------------------
    if(teste_lógico){ -> teste logico verdadeiro
        bloc de comando
    }
    else { -> teste logico falso

    }
===========================================
*/

const numero = 3;

const numeroPar = (numero %2) === 0

if(numero === 0){
    console.log('Numero inválido')
}
else if(numeroPar){
    console.log(`${numero} é par`)
}
else {
    console.log(`${numero} é par`)
}