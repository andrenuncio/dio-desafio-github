let button = document.getElementById("button");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;

function adicionarNumeros(num1: number, num2: number){
    return num1 + num2
}

if(button) {
    if(input1 && input2){
        button.addEventListener('click', () => console.log(adicionarNumeros(Number(input1.value), Number(input2.value))))
    }
    
}