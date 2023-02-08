let num = [5,8,2,9,3]

console.log(`nosso vetor é ${num}`)
console.log(`vetor tem ${num.length} posições`)
console.log(`vetor ordenado fica ${num.sort()}`)

for (let index = 0; index < num.length; index++) {
    console.log(`Posição ${index} é ${num[index]}`)
}

for (let pos in num) {
    console.log(` ${num[pos]}`)
}