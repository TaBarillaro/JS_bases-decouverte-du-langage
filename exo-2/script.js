// you can write js here
console.log('exo-2');

const myDate = new Date();

const dayOfTheWeek = 'We are in the week.';

const weekend = 'Finally the weekend!';

// la variable currentDay renvoie le jour de la semaine (entre 0 et 6) pour la date donnée, selon le temps local
let currentDay = myDate.getDay();

// je vérifie si aujourd'hui est un jour de la semaine ou s'il est weekend
let message = (currentDay === 0 || currentDay === 6) ? weekend : dayOfTheWeek;

console.log(message);

// variable correspondant à l'heure actuelle
let currentTime = myDate.getHours();
console.log(currentTime);

message = (currentDay === 0 || currentDay === 6 || (currentDay === 5 && currentTime >= 17)) ? weekend : dayOfTheWeek;

// une nouvelle condition si nous sommes un lundi avant 9h, afficher le message du weekend

message = (currentDay === 0 || currentDay === 6 || (currentDay === 5 && currentTime >= 17) || (currentDay === 1 && currentTime < 9)) ? weekend : dayOfTheWeek;