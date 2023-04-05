function inverterString(str) {
    var strInvertida = "";
    for (var i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }
    return strInvertida;
}
var stringOriginal = "Quero ser aprovado por favor kkk";
var stringInvertida = inverterString(stringOriginal);
console.log("A string invertida é:", stringInvertida);
