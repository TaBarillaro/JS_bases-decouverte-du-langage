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

for (let i = 0; i < input.length; i++) {
    resultArray1 = input[i];
    console.log(input[i]);
    console.log(resultArray);

    // 5.Maintenant nous devons vérifier si la lettre courante est une voyelle, utiliser la méthode indexOf des tableaux pour le faire.
    // if (vowels.indexOf(resultArray) !== -1) {
    //     console.log('is a vowel');
    // } else {
    //     console.log('is not a vowel!');
    // }

    // 6.Bonus : à la place de indexOf, écrire une seconde boucle pour trouver l'index de la voyelle recherchée
    for ( let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            // 7.Si la lettre est une voyelle, utiliser la méthode .push() sur le tableau resultArray afin d'y ajouter la lettre courante input[i]
            resultArray.push(vowels[j]);
            console.log(resultArray);

            // 8.En affichant la valeur de resultArray, on observe qu'il y a des virgules entre chaque élément. Utiliser les méthodes join() et toUpperCase() pour un bon formatage.
            // resultArray.join().toUpperCase();
            console.log(resultArray.join().toUpperCase());
        }
    }
}






