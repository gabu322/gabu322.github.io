function createHouse() {
    let houseNumber = document.querySelector("input[name=number]").value
    let houseDistrict = document.querySelector("input[name=district]").value
    let houseCity = document.querySelector("input[name=city]").value
    let houseArea = document.querySelector("input[name=area]").value

    let newHouse = document.createElement("li")
    newHouse.innerText = houseNumber + houseDistrict + houseCity + houseArea
    
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onClick", "removeHouse.this")

}