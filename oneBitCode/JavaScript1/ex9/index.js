function calculateTriangle() {
    const base = prompt("Digite a base do tirângulo: ");
    const height = prompt("Digite a altura do triângulo: ");

    return base * height / 2;
}
function calculateRectangle() {
    const base = prompt("Digite a base do retângulo: ");
    const height = prompt("Digite a altura do retângulo: ");

    return base * height;
}
function calculateSquare() {
    const side = prompt("Digite o lado do quadrado: ");

    return side * side;
}
function calculateTrapézio() {
    const smallerBase = parseFloat(prompt("Digite a base menor do trapézio: "));
    const biggerBase = parseFloat(prompt("Digite a base maior do trapézio: "));
    const height = prompt("Digite a altura do trapézio");

    return (smallerBase + biggerBase) * height / 2;
}
function calculateCircle() {
    const radius = prompt("Digite o raio do círculo: ");

    return radius * radius * Math.PI;
}

let result;
let option = "";

while (option !== "6") {
    option = prompt(
        "Bem vindo a calculadora, escolha qual operação você quer realizar:\n" + 
        "\n" + 
        "1- Área do triângulo\n" + 
        "2- Área do retângulo\n" +
        "3- Área do quadrado\n" +
        "4- Área do trapézio\n" +
        "5- Área do círculo\n" + 
        "6- Sair"
    )
    
    switch (option) {
        case "1":
            result = calculateTriangle();
            break;
        case "2":
            result = calculateRectangle();
            break;
        case "3":
            result = calculateSquare();
            break;  
        case "4":
            result = calculateTrapézio();
            break;
        case "5":
            result = calculateCircle();
            break;
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Valor inválido, digite novamente");
            break;
    }
    if(option !== "6") {
        alert("Valor calculado: " + result);
    }

}