function parimp(n){
    var n = Number(this.n)
    if(n%2 === 0){
        return 'par'
    }
    else{
        return 'impar'
    }
}

let res = parimp(11)
console.log(res)