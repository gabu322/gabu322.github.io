let option = 0;
let message;
const vacantList = []

function listVacant() {
    if(vacantList.length == 0) {
        alert("Sem vagas disponíveis")
    } else{
        let vacantInText = "Vagas disponiveis: \n"
        vacantInText += vacantList.reduce(function (finalText, vacant, index) {
            finalText += index + ". " + vacant.title + " (" + vacant.candidates.length + " candidatos)\n";
            return finalText;
        }, "")
        alert(vacantInText)
    }
}

while (option != "6") {

    message = "Digite o que quer fazer:\n\n" + 
               "1- Listar vaga disponíveis\n" +
               "2- Criar uma vaga\n" + 
               "3- Vizualizar uma vaga\n" + 
               "4- \n" +
               "5- \n" +
               "6- Sair"


    switch (option) {
        case 1:
            listVacant();
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
            
            break;
        case 6:
            
            break;
        default:
            alert("Valor inválido, digite novamente");
            break;
    }
}



