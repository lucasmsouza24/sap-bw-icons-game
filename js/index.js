let imgs = ["../img/MD Attribute.png", "../img/Transformation.png", "../img/Query.png", "../img/Characteristic.png", "../img/OpenHub.png", "../img/DTP.png", "../img/DSO.png", "../img/Process Chain.png", "../img/MD Text.png", "../img/lobj Catalogue.png", "../img/InfoCube.png", "../img/SPO.png", "../img/MD Hierarchy.png", "../img/DataSource.png", "../img/MultiProvider.png", "../img/Key Figure.png", "../img/InfoSource.png", "../img/Composite_Provider.png", "../img/APD.png", "../img/InfoPackage.png"];

let iconNames = []

imgs.forEach(img => {
    iconNames.push(nameWithoutPath(img));
});


class Question {

    constructor() {
        this.correct = randomIconName();
        this.options = options(this.correct);
    }

    displayInfo() {
        return `correct: ${this.correct}\n\noptions: ${this.options}`;
    }
}

// let q1 = new Question();

// console.log(q1.correct);
// console.log(q1.options);
console.log("hello")