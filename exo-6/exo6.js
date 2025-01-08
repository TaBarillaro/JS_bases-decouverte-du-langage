// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);


// Ex 6.2, 6.3, 6.4, 6.5
let team = {
    players: [
        {
            firstname: 'john',
            lastname: 'Doe',
            age: 71
        },
        {
            firstname: 'Teo',
            lastname: 'Tio',
            age: 19
        }
    ],
    games: [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        }
    ]
};
console.log(team.players);
console.log(team.games);

//  Ex. 6.6, 6.7
function addPlayer(firstname, lastname, age) {
    team.players.push({firstname, lastname, age});
}
addPlayer('Nicole', 'Ra', '15');
console.log(team.players);

// Ex. 6.8, 6.9
function addGames(opponent, teamPoints, opponentPoints) {
    team.games.push({opponent, teamPoints, opponentPoints});
}
addGames('Gingers', 30, 45);
addGames('Guests', 50, 22);
console.log(team.games);


// Ex. 6.10 Calculer la somme des points de votre équipe sur tous les matchs joués
// let oursPoints = [];
// oursPoints = team.games.teamPoints;
function totalOursPoints() {
    return team.games.reduce((total, games) => total + games.teamPoints, 0);
}
console.log(totalOursPoints());

// Ex. 6.11 Calculer la moyenne des points de l'équipe adverse sur tous les matchs.
function calculAverageOppositeTeam() {
    
    let totalOpponentsPoints = team.games.reduce((total, games) => total + games.opponentPoints, 0);
    return totalOpponentsPoints / team.games.length;
}
console.log(calculAverageOppositeTeam());
