function main() {
    var car = {
        model: "BMW",
        mark: "XT5",
        buildYear: 2005,
        carPrice: 50000,
        imageName: "https://www.cstatic-images.com/stock/900x600/235994.jpg"
    };

    var carDiv = document.getElementById('car')
    var textModel = document.createTextNode(car.model);
    var elementModel = document.createElement("div")
    elementModel.appendChild(textModel)
    carDiv.appendChild(elementModel)

    var textMark = document.createTextNode(car.mark);
    var elementMark = document.createElement("div")
    elementMark.appendChild(textMark)
    carDiv.appendChild(elementMark)

    var elementImageName = document.createElement("img")
    elementImageName.setAttribute("src", car.imageName)
    elementImageName.setAttribute("width", "300px");
    carDiv.appendChild(elementImageName)

    var textBuildYear = document.createTextNode(car.buildYear);
    var elementBuildYear = document.createElement("div")
    elementBuildYear.appendChild(textBuildYear)
    carDiv.appendChild(elementBuildYear)

    var textCarPrice = document.createTextNode(car.carPrice);
    var elementCarPrice = document.createElement("div")
    elementCarPrice.appendChild(textCarPrice)
    carDiv.appendChild(elementCarPrice)


// document.getElementById('demo')
// div1.appendChild()
// document.createElement("pqwe")
// document.createTextNode("This is new.");
}
