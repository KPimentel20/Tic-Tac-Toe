/*----- Constants -----*/
// The winner, player1, player2, & draw//
// Winner message definitely needs to pop up once: either when there is 3 in a row of one icon or when the board is full//

// Required constraints:
// Player one (objects with key value pairs: the keys (“icons”))//
// Player two//
let player1 = 'B'; //Bunny icon//
let player2 = 'T'; //Third eye icon//
let board; //Array of 9 elements 
let draw; //Tie//
let winner;
let whosTurnIsIt;

//Player1 is the bunny icon//
//Player2 is the third eye icon//
//Any box/space/square/cell that has yet to be clicked into will remain white(null)//
const turns = {
    true: "url('https://i.imgur.com/Yy0x9uY.jpg')",
    false: "url('https://i.imgur.com/sKFQFUn.jpg')",
    'null': ''
}

// Elements to access more than once in JS://
// Cells of the grid of the gameboard//
// Checking if there is a winner or a loser//
// Player “names aka 1, & 2” for => whosTurnIsIt, & for winner message//

//Each of these elements inside of our array will give us a winning pattern that the players need in order to win//
const winnerPattern = [
    //Rows//
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //Columns//
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //Diagonal//
    [0,4,8],
    [2,4,6],
];

//Cached listeners// --> cache means the computer remembers
const cellEls = Array.from(document.querySelectorAll('section > div'));
const rematchButton = document.getElementById('PLAY AGAIN');
const messageEl = document.getElementById('winnersMessage');

//Setup event listeners//
rematchButton.addEventListener('click', init);
document.querySelector('section').addEventListener('click', handleMove);

/*----- Functions -----*/
//Initialize to make the game your viewpoint at the beginning//
//whosTurnIsIt is set initially to player 1//

init();
//We are initializing our board,(whosTurnIsIt), and our winner which for now is null until a player wins//
//We have declared and initialized everything inside our array as null until players click into the game and begin//
function init(){
    board = [null, null, null, null, null, null, null, null, null]
    whosTurnIsIt = true;
    winner = null;
    render();
}

//handleMove is what allows our players to move//
//indexof returns our boolean which is whosTurnIsIt//
//We are delaring that the index equals to the event we are targeting in our array//
//whosTurnIsIt has a value of true so if we declare (!) it will allow us to alternate turns as it will result in player2//
//The same will continue because we have rendered it//
function handleMove(e) {
    const idx = cellEls.indexOf(e.target);
    if (winner || board[idx]) return;
    board[idx] = whosTurnIsIt;
    winner = checkWin();
    whosTurnIsIt = !whosTurnIsIt;
    render();
}

//The Math.abs lets us match a winning pattern in our array to the value of the numbers that a player has returned//
//To win, player1 or player2 needs a winning pattern of 3 in a row/column/diaganol in our board/game//
//If both player1 or player2 have the same winning pattern of 3 in a row/column/diaganol in our board/game it is then declared a draw//
function checkWin(){
    for(let pattern of winnerPattern){
        if (Math.abs(board[pattern[0]] + board[pattern[1]] + board[pattern[2]]) === 3)
        return whosTurnIsIt
    } 
    return board.includes(null) ? null : 'draw';
}

//We are rendering our section(divs/cells)/the spaces in our grid to the index//
//When we have a winner our rematch button will display, otherwise it will remain hidden//
function render() {
    cellEls.forEach((el,idx) => {
    el.style.backgroundImage = turns[board[idx]];
    });
    renderMsg();
    rematchButton.style.visibility = winner ? 'visible' : 'hidden';
}

function renderMsg(){
    console.log(winner)
    //Rendering our winnersmessage
    //This will tell us who is the winner
    //What message to display
let messagestatus = document.getElementsByClassName('winner')
    console.log(messagestatus[0])
    if (winner == true){messagestatus[0].innerText = 'Congrats player1! You won!'
    messagestatus[0].classList.remove('hidewinningmessage')
        //If winner equals true return player1//
    } else if (winner == false){messagestatus[0].innerText = 'Congrats player2! You won!'
    messagestatus[0].classList.remove('hidewinningmessage')
     //If the winner eqauls false return player2//
    } else {
        return 
    }
}


