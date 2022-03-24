/*----- constants -----*/
// The winner (3 ‘string’ options) => player1, player2, & draw//
// Winner message definitely needs to pop up once: either when there is 3 in a row of one icon or when the board is full//

// Required constraints:
// Player one (objects with key value pairs: the keys (“icons”))//
// Player two//
let player1 = 'B'; //bunny icon//
let player2 = 'T'; //third eye icon//
let board; // array of 9 elements 
let draw; //tie//
let winner;
let whosTurnIsIt;

//player1 is blue//
//player2 is red//
//any box/space/square/cell that has yet to be clicked into will remain white(null)//
const turns = {
    '1': 'blue',
    '-1': 'red',
    'null': 'white'
}

// Elements to access more than once in JS://
// Cells of the grid of the gameboard//
// Checking if there is a winner or a loser//
// Player “names aka 1, & 2” for => who’s turn is it & for winner message//

//each of these elements inside of our array will give us a winning pattern that the players need in order to win//
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
// whosTurnIsIt is set initially to player 1//

init();
//we are initializing our board, our variable(whosTurnIsIt aka player1 bc its 1) and our winner which for now is null until we have it rendered//
//we have declared and initialized everything inside our array as null until players click into the game and begin//
function init(){
    board = [null, null, null, null, null, null, null, null, null]
    whosTurnIsIt = 1;
    winner = null;
    render();
}

//handleMove is what allows our players to move//
//indexof returns -1 which is in this game player1/whosTurnIsIt//
//we are delaring that the index equals when we are targeting the event of each cell in the index of our index/array//
//whosTurnIsIt has a value of 1 so if we multiply it by -1 it will allow us to alternate turns as it will result in -1/player2//
//the same will continue bc we have rendered it and our win function comes after//
function handleMove(e) {
    const idx = cellEls.indexOf(e.target);
    if (winner || board[idx]) return;
    board[idx] = whosTurnIsIt;
    winner = checkWin();
    whosTurnIsIt *= -1;
    render();
}

//The Math.abs lets us match a winning pattern in our array to the value of the numbers that a player has returned//
//To win, player1 or player2 needs a winning pattern of 3 in a row/column/diaganol in our board/game//
//If both player1 or player2 have the same winning pattern of 3 in a row/column/diaganol in our board/game it is then declared a draw//
function checkWin(){
    for(let pattern of winnerPattern){
        if (Math.abs(board[pattern[0]] + board[pattern[1]] + board[pattern[2]]) === 3)
        return whosTurnIsIt
        //documentgetelementby id (winner)
        //
        // return winner = ()
        // messageEl.textContent = 'Congrats you win!';
    } 
    return board.includes(null) ? null : 'draw';
    }

//we are rendering our section(divs/cells)/the spaces in our grid to the index//
//When we have a winner our rematch button will display, otherwise it will remain hidden//
function render() {
    cellEls.forEach((el,idx) => {
    el.style.backgroundColor = turns[board[idx]];
    });
    renderMsg();
    rematchButton.style.visibility = winner ? 'visible' : 'hidden';
}

function renderMsg(){
    console.log(winner)
    //if we have a winner render winnersmessage
    //who is the winner
    //what message to display
let messagestatus = document.getElementsByClassName('winner')
    console.log(messagestatus[0])
    if (winner == 1){messagestatus[0].innerText = 'Congrats player1! You won!'
    messagestatus[0].classList.remove('hidewinningmessage')
        //if winner equals 1 return player1//
    } else if (winner == -1){messagestatus[0].innerText = 'Congrats player2! You won!'
    messagestatus[0].classList.remove('hidewinningmessage')
     //player2 wins//
    } else {
        return 
    }
}


//render game over//
//render the icons//

