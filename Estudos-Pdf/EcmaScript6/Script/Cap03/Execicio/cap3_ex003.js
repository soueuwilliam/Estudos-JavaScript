let palavra = ['oi', 'tudo', 'bem?'];

function caps(array){
    return array.map((palavra)=> palavra.toUpperCase())
}
console.log(`Original: ${palavra}\ntudo Maiusculo: ${caps(palavra)}`)