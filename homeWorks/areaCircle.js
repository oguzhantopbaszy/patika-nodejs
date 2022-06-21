//area of the circle == pi * r * r
const prompt = require('prompt-sync') ({sigint: true});

function areaCircle(){
    let pi = 3.14;
    const r = prompt('Enter radius: ');
    areaOfTheCircle = pi * r * r;
    console.log('Radius of the circle = ' + r);
    console.log('Area of the circle = ' + areaOfTheCircle);
}

areaCircle();