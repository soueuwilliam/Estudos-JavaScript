let amigo  = {
    nome: 'josé ',
    sexo: 'M',
    peso: 85.4,
    engodar(p){
        console.log('Engordou')
        this.peso+= p
    }
}

amigo.engodar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)