class pessoa{
    nome;
    idade;
    datanascimento;

    constructor(nome,idade){
       
        this.nome = nome;
        this.idade = idade;
        this.datanascimento = 2022 - idade;

    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

function compararPessoa(p1,p2){
    if(p1.idade> p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    }else if(p1.idade < p2.idade){
        console.log(`${p1.nome} é mais novo que ${p2.nome}`)
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idadde`)
    }
}
const vitor = new pessoa('vitor',25)
const renan = new pessoa('renan',30)

compararPessoa(vitor,renan)

