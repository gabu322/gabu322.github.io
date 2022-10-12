const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

//Filtra as espaçonaves com o 2º valor maior que 9
let fullSpaceships = hitchedSpaceships.filter((spaceships) => {
    return spaceships[1] > 9
}).map((spaceships) => { //Retorna apenas o nome delas
    return spaceships[0]
})

//Procuda o primeiro index que seja suficiente ao requisitado no return
let firstMissingShip = hitchedSpaceships.findIndex((spaceships, index) => {
    return spaceships[2] == false
})

//Coloca o index 0 de todas as espaçonaves como uppercase 
let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

//Concatena os valores recebidos
let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataform com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

//Imprime tudo
alert(message)