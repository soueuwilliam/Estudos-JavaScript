//Interação Tradicional
var frutas = ['abacaxi','maça','uva'];

console.log('INTERAÇÃO TRADICIONAL');
console.log('=========================');
console.log('-------------------------');
for(var i = 0;i < frutas.length;i++){
    console.log(frutas[i]);

};
console.log('-------------------------');
console.log('=========================');

//For each
console.log('For each')
console.log('=========================');
console.log('-------------------------')
console.log('Usado mais quando queremos percorer todos os elementos do array, lembrando que todos os elementos são processados antes de qualquer uso ,então caso os elementos forem removido, modificados ou acrescentado não será usada nos callbacks')
console.log('-------------------------');

var nomes = ['maria','josé','joão'];
nomes.forEach((nome)=> console.log(nome));


console.log('-------------------------');
var canais = ["globo","sbt", "record"];
canais.forEach(function(canal){
    canais.push("Rede tv"); //este item será ignorado 
    //Elemntos são primeiro processado para depois ser feita a função qual a vantagem ?(perguntar a elionai)
    console.log(canal);
})
console.log(canais)
console.log('-------------------------');
console.log('=========================');

//Map

console.log('Map')
console.log('=========================');
console.log('-------------------------')
console.log('Muito útil quando precisamos não somente passar por todos os elementos mais tambem modificala-los, como o for each os elementos são processados antes de quaquer ação mais diferente do for each ele nos devolve uma nova lista preservando a original')
console.log('-------------------------');


var numeros = [1,2,3]
var dobro = numeros.map((numero) => numero*2)
console.log(numeros)
console.log(dobro)
console.log('-------------------------');
console.log('=========================');

//filter

console.log('Filter')
console.log('=========================');
console.log('-------------------------');
console.log('Como o proprio nome já sugere usamos quando queremos filtrar algo como base nos critério a ser adotado pelo programa')
console.log('-------------------------');
var alunos = [
    {nome: 'joão', idade:15},
    {nome: 'josé', idade:18},
    {nome: 'maria', idade:20}
];

var alunoDemaior = alunos.filter((aluno) => aluno.idade >=18)

console.log(alunoDemaior)
console.log('-------------------------');
console.log('=========================');

console.log('Find')
console.log('=========================');
console.log('-------------------------');
console.log('quando encontrar um elemento com base em um caracteristica se tiver mais de um ele retorna o primeiro que achar sendo necessário outro passo para pegar todos')
console.log('-------------------------');

var alunos = [
    {nome:'joão'},
    {nome:'josé'},
    {nome:'maria'}
]

var aluno = alunos.find((aluno) => aluno.nome == 'josé')
console.log(aluno)

console.log('-------------------------');
console.log('=========================');

console.log('Every')
console.log('=========================');
console.log('-------------------------');
console.log('serve para saber se o toda lista segue um critério adotado')
console.log('-------------------------');

var alunos = [
    {nome:'joão', idade : 18},
    {nome:'josé', idade : 20},
    {nome:'maria', idade : 24}
]

let todosAlunosDeMaior = alunos.every((aluno) => aluno.idade >= 18);
console.log(todosAlunosDeMaior)

console.log('-------------------------');
console.log('=========================');


console.log('Some')
console.log('=========================');
console.log('-------------------------');
console.log('Usa para saber se pelo menos um elemento atende ao critério adotado')
console.log('-------------------------');

let pesodasmalas = [12,32,21,91];
let temMocilhaacimaDoPeso = false;

temMocilhaacimaDoPeso = pesodasmalas.some((pesoMochila) => pesoMochila > 30)
console.log(temMocilhaacimaDoPeso)


console.log('-------------------------');
console.log('=========================');

console.log('Reduce')
console.log('=========================');
console.log('-------------------------');
console.log('usado para reduzir o array em um só elemento')
console.log('-------------------------');

var numeros = [1,2,3,4,5];
var soma = 0;

soma = numeros.reduce((soma,numero) => soma + numero)
console.log(soma)


console.log('-------------------------');
console.log('=========================');