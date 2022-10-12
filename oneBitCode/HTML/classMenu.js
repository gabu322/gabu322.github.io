class Spaceship { 
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.doorsOpen = false
    }
    hitch() {
        this.isHitched = true
        this.doorsOpen = true
    }
}

function showMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt("Escolha uma opção:\n" + 
                              "1 - Engatar nave\n" + 
                              "2 - Imprimir naves\n" + 
                              "3 - Sair")
    }
    return chosenOption
}

function createSpaceship() {
    let spaceshipName = prompt("Insira o nome da nova nave:")
    let spaceshipCrewQuantity = prompt("Insira a quantidade de tripulantes da nave:") 
    let spaceship = new Spaceship(spaceshipName, spaceshipCrewQuantity)
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + " - " + spaceship.name + " - " + spaceship.crewQuantity + " passageiros" 
    });

    alert(spaceshipList)
}

let hitchedSpaceships = []
let chosenOption

while(chosenOption != "3") { //Usado para continuar no loop até que a pessoa escolha a saída (3)
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}