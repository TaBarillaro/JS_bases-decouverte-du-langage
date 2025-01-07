// you can write js here
console.log('exo-3');
const message = getElementById('message');

// 1.Je crée une variable que contient la question à afficher
var playerInput = prompt("Your choice ( rock, paper, scissors) ?");

// 2.Je crée la fonction pour faire jouer le joueur
function getPlayerChoice(playerInput) {
    // 3.je transform la variable pour l'avoir en minuscule
    playerInput.toLowerCase();

    // 4.condition pour vérifier le choix du joueur
    let playerChoise;
    if (playerChoise === "rock" || playerChoise === "paper" || playerChoise === "scissors") {
        return playerInput;
    } else {
        console.log('Error: You must choice between rock, paper or scissors');
    }
}
// getPlayerChoice();

// 5. Fonction pour le choix de l'ordinateur
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 2);
    // return computerChoice;

    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}
// getComputerChoice();




