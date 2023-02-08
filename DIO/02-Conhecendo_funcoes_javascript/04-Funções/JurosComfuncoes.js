function aplicarDesconto(valor, desconto) {
    return (valor -= (desconto / 100) * valor)
}
function aplicarJuros(valor, juros) {
    return (valor += (juros / 100) * valor)
}
(function main() {
    console.log('Desafio: forma de pagamento')
    const pagamento = 4
    const preco = 100

    if (pagamento == 1) {
        console.log(`O preço final com desconto é R$${aplicarDesconto(preco, 10).toFixed(2)}`)
    } else if (pagamento == 2) {
        console.log(`O preço final com desconto é R$${aplicarDesconto(preco, 15).toFixed(2)}`)
    } else if (pagamento == 3) {
        console.log(`O preço final é ${preco}`)
    } else {
        console.log(`O preço final com juros é R$${aplicarJuros(preco, 10).toFixed(2)}`)
    }

})()
