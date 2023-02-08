/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

const nota01 = 5;
const nota02 = 3;
const nota03 = 7;
const media = (nota01 + nota02 + nota03) / 3
console.log('Desafio: Média do aluno')
if (media >= 7) {
    console.log(`Sua média foi ${media} Situação: Aprovado`)
} else if (media < 5) {
    console.log(`Sua média foi ${media} situação: Reprovado`)
} else {
    console.log(`Sua média foi ${media} Situação: Recuperação`)
}

/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/
console.log('Desafio: IMC')
const peso = 70 
const altura = 1.70
const imc = peso/Math.pow(altura,2)
if (imc < 18.5) {
    console.log(`imc : ${imc} situação: abaixo do peso`)
} else if (imc <= 25) {
    console.log(`imc : ${imc} situação: peso normal`)
} else if(imc <= 30){
    console.log(`imc : ${imc} situação: acima do peso`)
}else if(imc <= 40){
    console.log(`imc : ${imc} situação: obeso`)
}else {
    console.log(`imc : ${imc} situação: obesidade grave`)
}
/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
console.log('Desafio: forma de pagamento')
const pagamento = 'parcelado'
const qtdparcelas = 4
const preco = 100

if(pagamento == 'debito'){
    console.log(preco * 0.90)
}else if(pagamento == "pix"){
    console.log(preco * 0.85)
}else if(pagamento == 'parcelado'){
    if(qtdparcelas === 2){
        console.log(preco/2)
    }else{
        console.log(((preco*1.1)/ qtdparcelas).toFixed(2))

    }
}
 