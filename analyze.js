function averageArray(array) {
    const average = array.reduce((a, b) => (a + b)) / array.length;
    return average;
}

function arrayLength(array) {
    return array.length
}

function arrayMin(array) {
    return Math.min.apply(Math, array);
}

function arrayMax(array) {
    return Math.max.apply(Math, array);
}

function analyzeArray(array) {
    const object = {
        average: averageArray(array),
        min: arrayMin(array),
        max: arrayMax(array),
        length: arrayLength(array)
    };
    return object; 
}

exports.averageArray = averageArray;
exports.arrayLength = arrayLength;
exports.arrayMin = arrayMin;
exports.arrayMax = arrayMax; 
exports.analyzeArray = analyzeArray; 