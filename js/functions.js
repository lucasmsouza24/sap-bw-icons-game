function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
}

function nameWithoutPath(path) {
    let iconName = path.replace("../img/", "").replace(".png", "");
    return iconName;
}

function randomIconName() {
    let rightIconIndex = randomInt(0, iconNames.length);
    let rightIconName = iconNames[rightIconIndex];
    return rightIconName;
}

function arrayContainsElement(array, element) {
    for(let arrayElement of iconNames) {
        if(arrayElement === element) {
            return true;
        }
    }
    return false;
}

function options(correctAnswer) {
    let _options = []
    _options.push(correctAnswer);

    while(_options.length < 5) {
        let randName = randomIconName();

        if(!arrayContainsElement(_options, randName)) {
            _options.push(randName);
        }
    }

    return _options.sort(() => Math.random() - 0.5);
}
