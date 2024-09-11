const board = document.getElementById("board");

let gameSize = 0; // The player select the quantity of cards 
let fisrtCard = [];
let secondCard = [];

// Start the game
function startGame(value) {  
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("menu").style.opacity = "0"; 
    resetLoop();
    board.style.gridTemplateColumns = "repeat("+Math.ceil(Math.sqrt(value))+", 50px)";

    gameSize = value;
    let cards = [];
    for(let i = 0; i < value/2; i++) {
        cards[i] = i;
        cards[i+value/2] = i;
    }
    cards.sort(function() {return 0.5-Math.random()});
    
    for(let i = 0; i < value; i++) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", "card"+i);
        document.getElementById("board").appendChild(card);              
        card.addEventListener("click", function() { showCard(i, cards[i]) });        
    }   
};

function showCard(pos, image) {    
    if(gameSize != 0) {
        if(fisrtCard[0] != -1 && secondCard[0] != -1){
            turnCards();
            resetLoop();
        }else if(fisrtCard[0] == -1) {
            document.getElementById("card"+pos).style.backgroundImage = "url(assets/card"+image+".jpg)";
            fisrtCard[0] = pos;
            fisrtCard[1] = image;
            console.log(image);
        }else if(pos != fisrtCard[0] && secondCard[0] == -1) {
            document.getElementById("card"+pos).style.backgroundImage = "url(assets/card"+image+".jpg)";
            secondCard[0] = pos;
            secondCard[1] = image;
        
            checkVictory();
        }
    }
}

function checkVictory() {
    if(fisrtCard[1] == secondCard[1]) {
        gameSize -= 2; 
        document.getElementById("card"+fisrtCard[0]).setAttribute("id", "unusable");   
        document.getElementById("card"+secondCard[0]).setAttribute("id", "unusable");

        resetLoop();
        if(gameSize == 0) {
            document.getElementById("menu").style.transition = "3s";
            document.getElementById("menu").style.visibility = "visible";
            document.getElementById("menu").style.opacity = "1";            
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