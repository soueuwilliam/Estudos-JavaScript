/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const  preco_gasolina = 6.66;
const  preco_etanol = 5.79;
const  kmPorLitro = 10;
const  DistanciaEmKm= 100 ;
let custo_viagem;
let tipoCombustivel = 'g';

if(tipoCombustivel === 'g'){
    custo_viagem = (DistanciaEmKm/kmPorLitro) * preco_gasolina
}
else {
    custo_viagem = (DistanciaEmKm/kmPorLitro) * preco_etanol
}

console.log(`R$ ${custo_viagem.toFixed(2)}`)
