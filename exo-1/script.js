// you can write js here
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

// let kelvins = 294;

// I convert kelvins degrees into celsius degrees
let celsius = kelvins - 273;

console.log('kelvins : ' + kelvins + ' , ' + 'celsius : ' + celsius);

// I create Fahrenheits variable in which I convert celsius degrees into fahrenheit degrees
let Fahrenheits = celsius * (9/5) + 32;

console.log('Fahrenheits : ' + Fahrenheits);

// I round the value of Fahrenheits
console.log('Fahrenheits : ' + Math.floor(Fahrenheits));