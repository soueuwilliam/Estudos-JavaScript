//Funcão que escreve o seu nome
(function myname(name) {
    console.log(`Meu nome é ${name}`)
})('William') // imediatamente invocada 

//Função que diz se você é maior de idade
function Verificaridade(idade) {
    if (idade >= 18) {
        console.log(`você tem ${idade}, você é maior de idade parabéns pode ser preso agora :)`)
    }
    else{
        console.log(`você tem ${idade}, você é de menor`)
    }
}
Verificaridade(Number(17))