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

    var cars = [
        {
            model: "BMW",
            mark: "XT5",
            buildYear: 2005,
            carPrice: 50000,
            imageName: "https://www.cstatic-images.com/stock/900x600/235994.jpg"
        },
        {
            model: "Mercedes-Benz",
            mark: "W213",
            buildYear: 2019,
            carPrice: 55000,
            imageName: "https://upload.wikimedia.org/wikipedia/commons/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg"
        },
        {
            model: "Audi",
            mark: "A8",
            buildYear: 2018,
            carPrice: 30000,
            imageName: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Audi_A8_D5_IMG_0066.jpg"
        }
    ];
    var carsDiv = document.getElementById('cars')
    var i;
    for(i = 0; i < cars.length; i++){
        var car = cars[i];
        var carDiv = document.createElement("div");
        addCar(carDiv, car);
        carsDiv.appendChild(carDiv)
    }
}
