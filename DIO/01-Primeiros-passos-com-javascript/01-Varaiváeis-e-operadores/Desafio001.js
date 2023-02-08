/*
==========================================================================
-----------------------------------------------------
Desafio
-----------------------------------------------------
Faça um programa para calcular o valor de uma viagem

você terá três variaveis. sendo elas:
    1 - preço do combustivel
    2 - valor médio de combustivel do carro por km
    3 - Distância em KM da viagem

imprima no console o valor gasto para realizaar está viagem
==========================================================================
*/

const  preco_combustivel = 5.79;
const  kmPorLitro = 12;
const  DistanciaEmKm= 100 ;
let custo_viagem = (DistanciaEmKm/kmPorLitro) * preco_combustivel
console.log(`R$ ${custo_viagem.toFixed(2)}`)



