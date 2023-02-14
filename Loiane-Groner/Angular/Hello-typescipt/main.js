var minhaVar = 'Minha Variavel';
function minhafunc(x, y) {
    return x + y;
}
var num = 2;
var pi = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
var matemtica = /** @class */ (function () {
    function matemtica() {
    }
    matemtica.prototype.soma = function (x, y) {
        return x + y;
    };
    return matemtica;
}());
