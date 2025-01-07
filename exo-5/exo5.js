// you can write js here

console.log('exo-5');

// 1.Créer une variable input qui prend pour valeur n'importe quelle phrase ou mot à traduire
let input = 'baleine';

// 2. créer une variable vowels de type tableau, contenant toutes les voyelles de l'alphabet
const vowels = ['a', 'e', 'i', 'o', 'u'];

// 3.On aura besoin de stocker la chaine traduite dans un tableau. Pour cela, créer une variable resultArray dont la valeur est un tableau vide, pour le moment
let resultArray = [];

// 4.Essayons maintenant de trouver toutes les voyelles dans notre chaine initiale.
//   Créer donc une boucle qui parcourt toutes les lettres de notre chaine de caractères. 
//   À l'intérieur de cette boucle, afficher la lettre courante dans la console.
// resultArray = input.split('');
// console.log(str);

for ( let i = 0; i < input.length; i ++) {
    resultArray = input[i];
    console.log(input[i]);

    // 5. Maintenant nous devons vérifier si la lettre courante est une voyelle, utiliser la méthode indexOf des tableaux pour le faire.
    if (vowels.indexOf(resultArray) !== -1) {
        console.log('is a vowel');
    } else {
        console.log('is not a vowel!');
    }
}


