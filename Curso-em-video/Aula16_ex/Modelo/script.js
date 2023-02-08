let num = window.document.getElementById('fnum')
let SelArray = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []
let maior = 0
let menor = 100
let soma = 0
let media = 0

function isnumero(n){
   if(Number(n) >= 1 && Number(n) <= 100){

        return true
    } else{
        return false
    }
}
function inlista(n, l){
    
    if(l.indexOf(Number(n)) != -1){
        return true 
    }else {
        return false
    }
}

function Adicionar(){
    res.innerHTML = ''
    
    //Cadastra o numero
    if(isnumero(num.value) == true && inlista(num.value,valores) == false){
        
        
        let item = document.createElement('option')
        item.innerText = `Elemento ${Number(num.value)} cadastrado`
        valores.push(Number(num.value))
        soma += Number(num.value)
        media = soma/(valores.length)
        SelArray.appendChild(item)
        if(Number(num.value) > maior){
            maior = Number(num.value)
        }else if(Number(num.value) < menor){
            menor = Number(num.value)
        }
        
        
    }
    else{
        alert('numero já casdatrado')
    }
    num.value = ''
    num.focus()
    
}

function Finalizar(){
    if(valores.length == 0){
        alert('não possui dados ')
    }else {
        total = valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todos temos ${total} elemento(s) cadastradado(s)</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é igual a ${soma}</p>`
        res.innerHTML += `<p>O menor valor é ${media}</p>`

    }
}
    