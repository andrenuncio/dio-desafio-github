function verificaPalindromo(string) {

    if (!string) return "Input Invalido";
     
    return string === string.split("").reverse().join("");
}

console.log(verificaPalindromo())