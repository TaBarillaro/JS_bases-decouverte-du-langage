// you can write js here
console.log('exo-3');

// 1.Je crée une variable que contient la question à afficher
var playerInput = prompt("Your choice ( rock, paper, scissors) ?");

// 2.Je crée la fonction pour faire jouer les joueurs
function getPlayerChoice(playerInput) {
    // 3.je transform la variable pour l'avoir en minuscule
    playerInput.toLowerCase();

    // 4.condition pour vérifier la choix des joueurs
    let playerChoise;
    if (playerChoise === "rock" || playerChoise === "paper" || playerChoise === "scissor") {
        return playerInput;
    } else {
        console.log('Error: You must choice between rock, paper or scissor');
    }
}


