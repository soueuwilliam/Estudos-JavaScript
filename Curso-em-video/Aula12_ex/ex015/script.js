function verificar(){
    var nascimento = window.document.getElementById('txtano').value
    var data = new Date().getFullYear();
    var res = window.document.querySelector('div#res')
    if(nascimento > data){
        alert("se você não é o Kyle Reese e está aqui para impedir que o exterminador faça o seu trabalho por favor digite uma data de nascimento menor que a data atual")
    }else if(nascimento == 0){
        alert("COmo você quer que eu diga sua idade se você não me informar seu ano de nascimento :( ")
    }else{
        var sex = window.document.getElementsByName("radsex")
        var idade = data - Number(nascimento)
        var genero = ''
        var img = document.createElement(`img`)
        img.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'um homem'
            if(idade < 10){
                img.setAttribute('src','img/CriancaMenino.png')
            }else if(idade < 21){
                img.setAttribute('src','img/Jovemmenino.png')
            }else if(idade < 50){
                img.setAttribute('src','img/AdultoMenino.png')
            }else {
                img.setAttribute('src','img/IdosoMenino.png')
            }
        }else {
            genero = 'uma mulher'
            if(idade < 10){
                img.setAttribute('src','img/Criançamenina.png')
            }else if(idade < 21){
                img.setAttribute('src','img/jovemmenina.png')
            }else if(idade < 50){
                img.setAttribute('src','img/AdultoMenina.png')
            }else {
                img.setAttribute('src','img/IdosoMenina.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
   
}