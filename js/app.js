/*----- constants -----*/

let player1 = 'bunnyicon';
let player2 = 'thirdeyeicon';

let tie = '';
// let win = 'threeInARow' === 3;
// let lose = noThree < MAX_TURNS;
// let gameOver =

const startGo = {
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
let tableEl = document.querySelector('table').addEventListener('click', handleMove);
let buttonEl = document.querySelector('button').addEventListener('click', initialize);

/*----- functions -----*/
// initialize to make the game your viewpoint at the beginning//
function initliaze()

// whos turn is it is set initially to player 1//
let whosTurnIsIt = player1

//reason why theres no parameters is bc argument happens inside code block + there is no argument//
//call/invoke alternateTurns when a player places an icon//
function alternateTurns (){
    if (whosTurnIsIt === player1) {
        whosTurnIsIt = player2
    } else if (whosTurnIsIt === player2) {
        whosTurnIsIt = player1
    }
    };

function handleMove(e) {
    alternateTurns();
    console.log('handleMoveInvoked')
}

//who won//
game.winnerPattern.forEach(() => {
    let player1Won = winnerPattern.every(game.player1Pattern.includes(Pattern))
    let player2Won = winnerPattern.every(game.player2Pattern.includes(Pattern))

    if (player1Won || player2Won) {
        document.querySelectorAll('box').forEach(cell => cell.id.add('disabled'))
        document.querySelector('gameOver').id.add('visible')
        document.querySelector('GAMEOVER').textContent = player1Won
        ? 'player1Won!'
        : 'player2Won!'
    }
})

//restart the game//
document.querySelector('REMATCH').addEventListener('click',() => {
    document.querySelector('gameOver').id.remove('visible')
    document.querySelectorAll('box').forEach(cell => {
        cell.classList.remove('disabled', 'player1', 'player2')
    })

    game.player1Turn = true
    game.player1Combo = []
    game.player2Combo = []
})

function initialize(){
    game = new Array(9).fill(null);
    turns = 1;
    winner = null;
    // render();
}

