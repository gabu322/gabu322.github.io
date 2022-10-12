let patientsList = ["Mateus", "Marcos"];
let action, basePrompt;

while (action != "C") {
    basePrompt = "Lista de pacientes: \n";

    for (let i = 0; i < patientsList.length; i++) {
        basePrompt = basePrompt + (i + 1) + "º " + patientsList[i];
        if ((i + 1) == patientsList.length) {
            basePrompt += ".\n\n";
        } else {
            basePrompt += "," + " ";
        }
    }

    basePrompt += "A- Novo Paciente\nB- Consultar paciente\nC- Sair";

    action = prompt(basePrompt);


    switch (action) {
        case "A":  
            patientsList.push(prompt("Digite o nome do novo paciente: "));
            break;
        case "B":
            alert("Paciente " + patientsList[0] + " consultado");
            patientsList.shift();
            break;
        case "C":
            alert("Saindo do Consultório");
            break;
        default:
            alert("Valor inválido, digite novamente");
    }
}