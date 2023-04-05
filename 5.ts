function inverterString(str: string): string {
  let strInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }

  return strInvertida;
}

let stringOriginal = "Quero ser aprovado por favor kkk";
let stringInvertida = inverterString(stringOriginal);
console.log("A string invertida é:", stringInvertida);
