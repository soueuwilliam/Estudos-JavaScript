function Contar() {
    let inicio = window.document.getElementById('inicio')
    let final = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.querySelector('div#contagem')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO]Está faltando dados!!!')
        res.innerHTML = 'impossivel contar !!!'
    }else {
        res.innerHTML = 'Contando: ... '
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if (p <= 0){
            p = 1;
        }
        if(i  < f ){
            for(let c = i ; c <= f ; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        
        }else {
            for(let c = i ; c>= f ; c -= p){
                res.innerHTML +=`${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
    

}