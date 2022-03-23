/*----- constants -----*/
// The winner (3 ‘string’ options) => player1, player2, & tie//
// Winner message definitely needs to pop up once: either when there is 3 in a row of one icon or when the board is full//

// Required constraints:
// Player one (objects with key value pairs: the keys (“icons”))//
// Player two//

let player1 = 'B';
let player2 = 'T';
let game = true;
let draw = false;
let winner = null;
let whosTurnIsIt;
let player1Total;
let rowTotal 

const start = {
    '1': {
        name: 'player1',
        score: 0
    },
    '-1': {
        name: 'player2',
        score: 0
    }
};

// Elements to access more than once in JS://
// Cells of the grid of the gameboard//
// Checking if there is a winner or a loser//
// Player “names aka 1, & 2” for => who’s turn is it & for winner message//

const winnerPattern = [
    //rows//
    [1,2,3],
    [4,5,6],
    [7,8,9],
    //columns//
    [2,5,8],
    [1,4,7],
    [3,6,9],
    //diagonal//
    [1,5,9],
    [3,5,7],
];

// setup event listeners//
const rematchButton = document.getElementById('PLAY AGAIN');
const winnersMessage = document.getElementById('winnersMessage');
// const TieMessage = document.getElementById('');
let whosTurnMessageEl = document.getElementById("whosturnisit");
let gameEl = document.getElementById("1").addEventListener('click', handleClick);
// let tableEl = document.querySelector('table').addEventListener('click', handleMove);

let cellEls = document.querySelectorAll('td')

cellEls.forEach((cell) => {
    cell.addEventListener('click', handleMove);
});

// let buttonEl = document.querySelector('button').addEventListener('click',);


/*----- functions -----*/
// initialize to make the game your viewpoint at the beginning//
// whos turn is it is set initially to player 1//

function init() {
    whosTurnIsIt = player1
    whosTurnMessageEl.innerHTML = `It is ${whosTurnIsIt}'s turn`
}

init();

// Initializing the state variables:
// Grid, the players, their icons, replay//
// Upon loading, the winner variable should be initialized to null//
// Who’s turn is it variable => randomize it//
// Render (view) winner = null//

//wants me to add boolean to this//
// Updating the status of who’s turn it is//
//reason why theres no parameters is bc argument happens inside code block + there is no argument//
function alternateTurns(){
    if (whosTurnIsIt === player1) {
        whosTurnIsIt = player2
    } else if (whosTurnIsIt === player2) {
        whosTurnIsIt = player1
    }
    };

//call/invoke alternateTurns when a player places an icon//
//click function for getting to click inside cells/table//
function handleClick(e) {
    console.log('handleClickInvoked')
}
//we added an event and targeted where the event takes place (cell that was clicked on) to update the innerHTML//
//move function for placing your constraints in cells/table//
function handleMove(e) {
    alternateTurns();
    whosTurnMessageEl.innerHTML = `It is ${whosTurnIsIt}'s turn`
    if (whosTurnIsIt === player1) {
        e.target.innerHTML = player2
    } else if (whosTurnIsIt === player2) {
        e.target.innerHTML = player1
    }
    console.log('handleMoveInvoked')
}

//need to assign values to the variables || check the innerHTML of all the cells//
//its a tie//
function tie() {
    if (player1Row + player1Column === 3 + player1Diagonal === 3) &&
    (player2Row === 3 + player2Column === 3 + player2Diagonal === 3) {
    tie = true;
    console.log('Its a tie!')
    }
}


//check the innerhtml of each cell to help us determine a winner bc each cellEl has a value or its null and comparing it to the array//
// Render a winner message if there is a winner//
//who won//
function checkWin() {
if (player1Row === 3 || player1Column === 3 || player1Diagonal === 3) {
    winner = player1
    console.log('Congrats! You won!')
} else if (player1Row !== 3 || player1Column !== 3 || player1Diagonal !== 3) {
    winner = player2
    console.log('You lost')
}
}


 //how you are going to check the value/innerHTML of each cellEl


//rematch/restart the game//

// Handle player clicking on the replay button//


// When the game is over//
// function gameOver()

// Invoke main render function://