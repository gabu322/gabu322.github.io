let cardList = [];
let action, basePrompt;

while (action != "C") {
    basePrompt = "Lista de cartas: \n";

    for (let i = 0; i < cardList.length; i++) {
        basePrompt = basePrompt + (i + 1) + " " + cardList[i];
        if ((i + 1) == cardList.length) {
            basePrompt += ".\n\n";
        } else {
            basePrompt += "," + " ";
        }
    }

    basePrompt += "A- Adicionar carta\nB- Puxar carta\nC- Sair";

    action = prompt(basePrompt);


    switch (action) {
        case "A":  
            cardList.push(prompt("Digite a carta a ser adicionada: "));
            break;
        case "B":
            alert("Carta " + cardList[0] + " removida");
            cardList.pop();
            break;
        case "C":
            alert("Saindo do Consultório");
            break;
        default:
            alert("Valor inválido, digite novamente");
    }
}