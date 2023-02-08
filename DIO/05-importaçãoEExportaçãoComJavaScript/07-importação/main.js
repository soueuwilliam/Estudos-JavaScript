
const {gets,print} = require('./funcoes-auxiliares')
const numerosorteados = [];
const quatidadedealunos = gets()
let maior = 0
for(let i = 0; i < quatidadedealunos;i++){
    const numerosorteado = gets()
    if(numerosorteado > maior){
        maior = numerosorteado
    }
}

console.log(maior)

