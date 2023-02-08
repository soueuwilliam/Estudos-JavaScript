function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date().getHours()
   
    var minutos = new Date().getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    
    if(hora >= 0 && hora<=12 ){
        img.src = 'imgs/fotomanha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    }else if(hora >= 12 && hora <18){
        img.src = 'imgs/fototarde.png'
        document.body.style.backgroundColor = '#b9846f'
    }else {
        img.src = 'imgs/fotonoite.png'

        document.body.style.backgroundColor = '#515154'
    }

}
