function main() {
    function addCar(carDiv, car) {
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
    }

    var car = {
        model: "BMW",
        mark: "XT5",
        buildYear: 2005,
        carPrice: 50000,
        imageName: "https://www.cstatic-images.com/stock/900x600/235994.jpg"
    };
    var carDiv = document.getElementById('car')
    addCar(carDiv, car);

    var carMercedes = {
        model: "Mercedes-Benz",
        mark: "W213",
        buildYear: 2019,
        carPrice: 55000,
        imageName: "https://upload.wikimedia.org/wikipedia/commons/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg"
    };
    var carMercedesDiv = document.getElementById('carMercedes')
    addCar(carMercedesDiv, carMercedes);

}
