var alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
  ];

  function aprovados(alunos,media){
    return alunos.filter((aluno) => aluno.media > media)
  }
var Listaaprovados = aprovados(alunos,6.5);

console.log(` Aprovados -> ${Listaaprovados} `) // -> n to conseguin 



