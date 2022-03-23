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
    board = ['null','null','null','null','null','null','null','null','null']
    whosTurnIsIt = true;
    winner = null;
    render();
}

function render(){
    cellEls.forEach((el, idx) => {
        el.style.backgroundColor = turns[board[idx]];
    })
}
//we added an event and targeted where the event takes place (cell that was clicked on) to update the innerHTML//
//move function for placing your constraints in cells/table//

function handleMove(e) {
    const idx = cellEls.indexOf(e.target);
    if (idx === 1 || winner) return;
    board[idx] = whosTurnIsIt;
    // winner = getWinner();
    whosTurnIsIt *= -1;
    console.log(e)
    render();
}