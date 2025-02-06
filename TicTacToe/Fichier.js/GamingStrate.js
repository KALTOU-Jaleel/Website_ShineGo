let currentPlayer = null;  // Stocke le joueur actuel (X ou O)
let gameBoard = []; //  Représente l'état du plateau
let winnerMessage = document.querySelector(".ChampResultat");
let xButton = document.querySelector(".ButtonCroix");
let oButton = document.querySelector(".ButtonRond");

// Fonction pour choisir X ou O au début du jeu
function chooseSymbol(symbol) {
    if (currentPlayer !== null) {
        return; // Si le joueur est déjà choisi, ne rien faire
    }
    currentPlayer = symbol === 'X' ? 'O' : 'X';
        
    winnerMessage.value = `Le joueur commence avec ${symbol}`;

    // Désactive le bouton correspondant après le choix
    
}

// Fonction pour ajouter X ou O sur le plateau
function addSymbol(cellIndex) {
    
    if (!currentPlayer) {
        alert("Veuillez choisir X ou O pour commencer !");
        return;
    }

    let cell = document.querySelector(`.cell[data-index="${cellIndex}"]`);

    if (!cell.innerHTML) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        
        cell.innerHTML = currentPlayer; // Ajoute X ou O
        cell.classList.add(currentPlayer); // Applique le style spécifique à la cellule
        gameBoard[cellIndex] = currentPlayer; // Met à jour l'état du plateau

       

        if (currentPlayer === 'X') {
            xButton.disabled = true;
            oButton.disabled = false; // Rendre l'autre bouton actif
        } else if (currentPlayer === 'O') {
            oButton.disabled = true;
            xButton.disabled = false; // Rendre l'autre bouton actif
        }

        if (checkWinner(currentPlayer)) {
            winnerMessage.value = `Le joueur ${currentPlayer} a gagné !`;
            setTimeout(resetGame, 8000);
            return; // Si un joueur gagne, on arrête le jeu ici
        }

        if (gameBoard.every(cell => cell !== undefined )) {
            winnerMessage.value = "Aucun gagnant.";
            
            return;
        }
        
        // Change de joueur après chaque mouvement (pas de réinitialisation ici)
         }
}

// Vérifier s'il y a un gagnant
function checkWinner(player) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    return winningCombos.some(combination => 
        combination.every(index => gameBoard[index] === player)
    );
}



function resetGame() {
    // Réinitialiser le plateau de jeu
    gameBoard = [];
    currentPlayer = null;

    // Réinitialiser l'affichage des cellules
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.innerHTML = ''; // Vider le contenu de chaque cellule
        cell.classList.remove('X', 'O'); // Enlever les classes de style
    });

    // Réactiver les boutons X et O
    xButton.disabled = false;
    oButton.disabled = false;
    winnerMessage.value = 'Bonne partie...'; // Réinitialiser le message de victoire
}