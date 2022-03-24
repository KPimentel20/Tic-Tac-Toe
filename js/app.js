/*----- constants -----*/
// The winner (3 ‘string’ options) => player1, player2, & tie//
// Winner message definitely needs to pop up once: either when there is 3 in a row of one icon or when the board is full//

// Required constraints:
// Player one (objects with key value pairs: the keys (“icons”))//
// Player two//
//let is what can change + const is what can NOT change//
let player1 = 'B';
let player2 = 'T';
let board; // array of 9 elements 
let draw;
let winner;
let whosTurnIsIt;

const turns = {
    '1': 'blue',
    '-1': 'red',
    'null': 'white'
    }

// Elements to access more than once in JS://
// Cells of the grid of the gameboard//
// Checking if there is a winner or a loser//
// Player “names aka 1, & 2” for => who’s turn is it & for winner message//

const winnerPattern = [
    //rows//
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //columns//
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonal//
    [0,4,8],
    [2,4,6],
];

//cached listeners// --> cache means the computer remembers
const cellEls = Array.from(document.querySelectorAll('section > div'));
const rematchButton = document.getElementById('PLAY AGAIN');
const messageEl = document.getElementById('winnersMessage');

//setup event listeners//
rematchButton.addEventListener('click', init);
document.querySelector('section').addEventListener('click', handleMove);

/*----- functions -----*/
// initialize to make the game your viewpoint at the beginning//
// whos turn is it is set initially to player 1//

init();

function init(){
    board = [null, null, null, null, null, null, null, null, null]
    whosTurnIsIt = 1;
    winner = null;
    render();
}

//we added an event and targeted where the event takes place (cell that was clicked on) to update the innerHTML//
//move function for placing your constraints in cells/table//

function handleMove(e) {
    const idx = cellEls.indexOf(e.target);
    if (winner || board[idx]) return;
    board[idx] = whosTurnIsIt;
    winner = checkWin();
    whosTurnIsIt *= -1;
    render();
}

function checkWin(){
    for(let pattern of winnerPattern){
        if (Math.abs(board[pattern[0]] + board[pattern[1]] + board[pattern[2]]) === 3)
        return whosTurnIsIt;
    } 
    return board.includes(null) ? null : 'draw';
    }

function render() {
    cellEls.forEach((el,idx) => {
    el.style.backgroundColor = turns[board[idx]];
    });
    //return a message//
    rematchButton.style.visibility = winner ? 'visible' : 'hidden';
}

