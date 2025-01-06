// you can write js here
console.log('exo-2');

const myDate = new Date();

let dayOfTheWeek = 'We are in the week.';

let weekend = 'Finally the weekend!';

// la variable currentDay renvoie le jour de la semaine (entre 0 et 6) pour la date donnée, selon le temps local
let currentDay = myDate.getDay();

// je vérifie si aujourd'hui est un jour de la semaine ou s'il est weekend
let message = (currentDay === 0 || currentDay === 6) ? weekend : dayOfTheWeek;

console.log(message);

