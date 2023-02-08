/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/
console.log('========================')
console.log('TABUADA')
console.log('========================')
let numero = 10
for(let i = 1 ;i <=10; i ++){
    console.log(`${i} X ${numero} = ${numero*i}`)
}


/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/
console.log('========================')
console.log('IMPRIME NUMERO PAR')
console.log('========================')
function ehpar(n){
    if(n%2 == 0){
        return true
    }else {
        return false
    }
}
let lista = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0 ;i <lista.length; i ++){
    if(ehpar(lista[i])){
        console.log(lista[i])
    }
}

/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/
console.log('========================')
console.log('IMPRIME PALAVRA QUE COMEÇA COM A LETRA V')
console.log('========================')
let nomes = ['VASCO', 'Vitoria', 'Fluminense','Botafogo']
for(let i = 0 ;i <nomes.length; i ++){
    if(nomes[i][0] === 'V'){
        console.log(nomes[i])
    }
}
/*
4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
*/
console.log('========================')
console.log('NUMERO PAR NO INTERVALO 10 A 50')
console.log('========================')
let listapar = []
for(let i = 10; i <=50;i++){
    if(ehpar(i) == true){
        listapar.push(i)
    }    
}
console.log(listapar)
/*
5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/
console.log('========================')
console.log('ALUNOS EM RECUPERAÇÃO')
console.log('========================')
const medias = [2, 7, 3, 8, 10, 4]

for(let i = 0 ; i < medias.length;i++){
    if(medias[i] < 5){
        console.log(medias[i])
    }
}

/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/
console.log('========================')
console.log('MAIOR NOTA')
console.log('========================')
let notas = [2, 7, 3, 8, 10, 4]
maior = -1
for(let i = 0 ; i < notas.length;i++){
   if(notas[i] > maior){
    maior = notas[i]
   } 
}
console.log(`Lista ${notas}`)
console.log(`Lista ${maior}`)
