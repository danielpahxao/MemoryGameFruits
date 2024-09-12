const board = document.getElementById("board");

let gameSize = 0; // The player select the quantity of cards
let controlVictory = 0;
let fisrtCard = [];
let secondCard = [];
let turnedCard = [];

// Start the game
function startGame(value) {  
// This code snipped cleans everything to eliminate inconsistency 
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("menu").style.opacity = "0"; 
    resetLoop();    
    if(gameSize != 0){
        for(let i = 0; i < gameSize; i++)
            board.removeChild(document.getElementsByClassName("card")[0]);
    }
// end of cleaning
// Draw the board accordinly the number of cards.
    board.style.gridTemplateColumns = "repeat("+Math.ceil(Math.sqrt(value))+", 50px)";
    controlVictory = gameSize = value;

// Use differente cards per game. *Caution with the number 20, if the game assets has less, so change it.    
    let randomCards = [];
    for(let i = 0; i < 20; i++)
        randomCards[i] = i;
    randomCards.sort(function() {return 0.5 - Math.random()});

// Duplicate the cards, it builds the pairs
    let cards = [];
    for(let i = 0; i < value/2; i++) {
        cards[i] = randomCards[i];
        cards[i+value/2] = randomCards[i];
    }
    cards.sort(function() {return 0.5-Math.random()});
    
    for(let i = 0; i < value; i++) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", "card"+i);
        document.getElementById("board").appendChild(card);              
        card.addEventListener("click", function() { showCard(i, cards[i]) });        
    } 
// End of drawing the board
};

function showCard(pos, image) {  
    if(document.getElementsByClassName("card")[pos].getAttribute("id") == "unusable")
        return null;

    if(fisrtCard[0] != -1 && secondCard[0] != -1){
        turnCards();
        resetLoop();
    }else if(fisrtCard[0] == -1) {
        document.getElementById("card"+pos).style.backgroundImage = "url(assets/card"+image+".jpg)";
        fisrtCard[0] = pos;
        fisrtCard[1] = image;
    }else if(pos != fisrtCard[0] && secondCard[0] == -1) {
        document.getElementById("card"+pos).style.backgroundImage = "url(assets/card"+image+".jpg)";
        secondCard[0] = pos;
        secondCard[1] = image;
    
        checkVictory();
    }
    
}

function checkVictory() {
    if(fisrtCard[1] == secondCard[1]) {
        controlVictory -= 2; 
        document.getElementById("card"+fisrtCard[0]).setAttribute("id", "unusable");   
        document.getElementById("card"+secondCard[0]).setAttribute("id", "unusable");
        resetLoop();
        if(controlVictory == 0) {
            document.getElementById("end-game").style.visibility = "visible";
            document.getElementById("end-game").style.opacity = "1";             
        }
    }   
}

function turnCards(){
    
    if(fisrtCard[0] != -1 && secondCard[0] != -1) {
        document.getElementById("card"+fisrtCard[0]).style.backgroundImage = "url(assets/cback.jpg)";
        document.getElementById("card"+secondCard[0]).style.backgroundImage = "url(assets/cback.jpg)";       
    }
}
function resetLoop() {
    fisrtCard[0] = -1;
    fisrtCard[1] = -1;
    secondCard[0] = -1;
    secondCard[1] = -1;
}

// Call it when the player wins the game.
const btnMenu = document.getElementById("btn-menu");
function restartGame() {
    document.getElementById("end-game").style.visibility = "hidden";
    document.getElementById("end-game").style.opacity = "0"; 

    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("menu").style.opacity = "1"; 
}
btnMenu.addEventListener("click", restartGame);