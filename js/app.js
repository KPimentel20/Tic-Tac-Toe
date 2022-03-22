/*----- constants -----*/
// The winner (3 ‘string’ options) => player1, player2, & tie//
// Winner message definitely needs to pop up once: either when there is 3 in a row of one icon or when the board is full//

// Required constraints:
// Player one (objects with key value pairs: the keys (“icons”))//
// Player two//

let player1 = 'bunnyicon';
let player2 = 'thirdeyeicon';
let game = true;
let draw = true || false;

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
const begin = document.getElementById('start')
let gameEl = document.getElementById("1").addEventListener('click', handleClick);
let tableEl = document.querySelector('table').addEventListener('click', handleMove);
// let buttonEl = document.querySelector('button').addEventListener('click',);


/*----- functions -----*/
// initialize to make the game your viewpoint at the beginning//
// function initliaze()

// Initializing the state variables:
// Grid, the players, their icons, replay//
// Upon loading, the winner variable should be initialized to null//
// Who’s turn is it variable => randomize it//
// Render (view) winner = null//

// whos turn is it is set initially to player 1//
let whosTurnIsIt = player1

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

//move function for placing your constraints in cells/table//
function handleMove(e) {
    alternateTurns();
    console.log('handleMoveInvoked')
}

//its a tie//
// function tie(draw) {
//     if (draw) {
//         winnersMessageElement.innerText = "It's a tie!"
//     } else {
//         //${} is a string interpulation//
//         // winnersMessageElement.innerText = `player ${}` wins!
//     } winnersMessage.classList.add('show')
// }

//who won//
function checkWin(Winner) {
if (rowTotal == 0 || columnTotal == 0 || rowTotal == 3 || columnTotal == 3) {
    return true;
} else if (rowTotal == 0 || columnTotal == 0 || rowTotal != 3 || columnTotal != 3) {
    return false;
}
}

// Render a winner message if there is a winner//
const winnersMessage = document.getElementById('winnersMessage')

//rematch/restart the game//
// Handle player clicking on the replay button//
const rematchButton = document.getElementById('PLAY AGAIN')

// When the game is over//
// function gameOver()

// Invoke main render function://
// When you are resetting the game (re-initialize state variables)//
// Render those variables to the page//