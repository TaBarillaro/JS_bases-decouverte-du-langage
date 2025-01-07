// you can write js here
console.log('exo-3');

// 1.Je crée une variable que contient la question à afficher
let playerInput = prompt("Your choice ( rock, paper, scissors) ?");
// console.log('playerInput : ' + playerInput);

// 3.je transform la variable pour l'avoir en minuscule
playerInput = playerInput.toLowerCase();

// 2.Je crée la fonction pour faire jouer le joueur
function getPlayerChoice(playerInput) {
    
    // 4.condition pour vérifier le choix du joueur
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        console.log('playerInput : ' + playerInput);
        return playerInput;
    } else {
        console.log('Error: You must choice between rock, paper or scissors');
    }
}

// 5. Fonction pour le choix de l'ordinateur
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 2);

    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

// 6. Fonction pour determiner le gagnant
function findWinner(playerChoice, computerChoice) {
    // 7. Cas d'égalité
    if (playerChoice === computerChoice) {
        return "Tied";
        // 8. condition pour vérifier qui a gagné si l'utilisateur à choisi rock
    } else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Won';
        } else {
            return 'Lost';
        }
        // 9. condition pour vérifier qui a gagné si l'utilisateur à choisi paper
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Won';
        } else {
            return 'Lost';
        }
        // 10. condition pour vérifier qui a gagné si l'utilisateur à choisi scissors
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Won';
        } else {
            return 'Lost';
        }
    } else if (playerChoice === 'bomb') {
        return 'Won';
    }
}

// 11. Fonction pour jouer
function playGame() {
    let uChoice = getPlayerChoice(playerInput);
    let computerChoice = getComputerChoice();
    console.log('uChoice : ' + uChoice);
    console.log('computerChoice : ' + computerChoice);

    // 12. j'appelle la fonction findWinner pour voir le vainqueur
    findWinner(uChoice, computerChoice);
    console.log(findWinner(uChoice, computerChoice));
} 
playGame();


