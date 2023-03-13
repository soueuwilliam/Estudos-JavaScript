let numeros = [5,6,7]
function dobrar(numeros){
    return numeros.map((numero) => numero*2)
}

console.log(`Array original: ${numeros}\nArray dobrado: ${dobrar(numeros)}`)