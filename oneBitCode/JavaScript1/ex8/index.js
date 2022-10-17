const realStateList = [];
let option = "";

do {
    option = prompt(
        "Bem vindo ao cadastro de imóveis\n" + 
        "Total de imóveis: " + realStateList.length +
        "\n\nEscolha umma opção:\n" + 
        "1- Novo imóvel\n" +
        "2- Listar imóveis\n" +
        "3- Sair\n"
    )
    
    switch (option) {
        case "1":
            const realState = {}
            realState.proprietary = prompt("Digite o nome do proprietário:");
            realState.roomQuantity = prompt("Digite a quantidade de quartos:");
            realState.bathroomQuantity = prompt("Digite a quantidade de banheiros");
            realState.garage = prompt("Ele possui garagem? (Sim/Não)");

            const confirmation = confirm("Deseja confirmar o imóvel com as seguintes informações? " + 
            "Proproetário: " + realState.proprietary +
            "\nQuantidade de quartos: " + realState.roomQuantity +
            "\nQuantidade de banheiros" + realState.bathroomQuantity +
            "\nPossui garagem: " + realState.garage
            );

            if (confirmation) {
                realStateList.push(realState);     
            }

            break;
        case "2":
            for (let index = 0; index < realStateList.length; index++) {
                alert("Imóvel " + index +
                      "\n\nProprietário: " + realStateList[index].proprietary +
                      "\nQuantidade de quartos: " + realStateList[index].roomQuantity +
                      "\nQuantidade de banheiros: " + realStateList[index].bathroomQuantity +
                      "\nGaragem: " + realStateList[index].garage 
                );
            }
            break;
        case "3":
            alert("Saindo");
            break;  
        default:
            break;
    }
} while (option !== "3");