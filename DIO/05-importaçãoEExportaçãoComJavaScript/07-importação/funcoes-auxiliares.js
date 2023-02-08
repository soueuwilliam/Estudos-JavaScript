const conjuntoentradas= [10,5,50,10,98,23,33,44,1,99,7]
let i =0;

function gets(){
    const valor = conjuntoentradas[i]
    i++
    return valor
}
function print(texto){
    console.log(texto)
}

module.exports = { gets,print }