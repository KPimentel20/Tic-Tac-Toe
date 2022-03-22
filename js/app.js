/*----- constants -----*/

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

// whos turn is it is set initially to player 1//
let whosTurnIsIt = player1

//reason why theres no parameters is bc argument happens inside code block + there is no argument//
//call/invoke alternateTurns when a player places an icon//
//wants me to add boolean to this//
function alternateTurns(){
    if (whosTurnIsIt === player1) {
        whosTurnIsIt = player2
    } else if (whosTurnIsIt === player2) {
        whosTurnIsIt = player1
    }
    };

function handleClick(e) {

    console.log('handleClickInvoked')
}

function handleMove(e) {
    alternateTurns();
    console.log('handleMoveInvoked')
}

//its a tie//

function tie(draw) {
    if (draw) {
        winnersMessageElement.innerText = "It's a tie!"
    } else {
        //${} is a string interpulation//
        // winnersMessageElement.innerText = `player ${}` wins!
    } winnersMessageElement.classList.add('show')
}

//who won//
function checkWin(Winner) {
if (rowTotal == 0 || columnTotal == 0 || rowTotal == 3 || columnTotal == 3) {
    return true;
} else if (rowTotal == 0 || columnTotal == 0 || rowTotal != 3 || columnTotal != 3) {
    return false;
}
}

const winnersMessageElement = document.getElementById('winnersMessage')

//rematch/restart the game//
const rematchButton = document.getElementById('PLAY AGAIN')

// function gameOver() {
// }

// function initialize(){
//     game = new Array(9).fill(null);
//     turns = 1;
//     winner = null;
//     render();
// }}
