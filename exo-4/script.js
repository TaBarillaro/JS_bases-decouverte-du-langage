// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

// 1.Utiliser une méthode pour enlever le dernier élément du tableau secretMessage
secretMessage.pop();
console.log(secretMessage);

// 2.Utiliser une méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau
secretMessage.push('to', 'program');
console.log(secretMessage);

// 3.Changer le mot 'easily' par 'right' en accédant au bon index du tableau
secretMessage[6] = 'right';
console.log(secretMessage);

// 4.Utiliser une méthode pour supprimer le premier élément du tableau
secretMessage.shift();
console.log(secretMessage);

