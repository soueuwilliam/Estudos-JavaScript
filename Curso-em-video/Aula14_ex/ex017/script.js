function tabuada(){
    let num = document.getElementById('txtnumber')
    let tab = document.getElementById('seltab') 
    if(num.value.legth == 0){
        alert('por favor digite um numero')  
    }else { 
        tab.innerHTML = ''
        let n = Number(num.value)
        for(let c = 1 ; c <= 10;c ++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
}