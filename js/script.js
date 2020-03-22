
let cell1 = document.querySelector('#cell1');
let cell2 = document.querySelector('#cell2');
let cell3 = document.querySelector('#cell3');
let cell4 = document.querySelector('#cell4');
let cell5 = document.querySelector('#cell5');
let cell6 = document.querySelector('#cell6');
let cell7 = document.querySelector('#cell7');
let cell8 = document.querySelector('#cell8');
let cell9 = document.querySelector('#cell9');

let gameBoard = document.querySelectorAll('.cell');

function gameOver() {
    if (cell1.classList.contains('playerHuman') && cell2.classList.contains('playerHuman') && cell3.classList.contains('playerHuman')
        || cell4.classList.contains('playerHuman') && cell5.classList.contains('playerHuman') && cell6.classList.contains('playerHuman')
            || cell7.classList.contains('playerHuman') && cell8.classList.contains('playerHuman') && cell9.classList.contains('playerHuman')
                || cell1.classList.contains('playerHuman') && cell4.classList.contains('playerHuman') && cell7.classList.contains('playerHuman')
                    || cell2.classList.contains('playerHuman') && cell5.classList.contains('playerHuman') && cell8.classList.contains('playerHuman')
                        || cell3.classList.contains('playerHuman') && cell6.classList.contains('playerHuman') && cell9.classList.contains('playerHuman')
                            ||cell1.classList.contains('playerHuman') && cell5.classList.contains('playerHuman') && cell9.classList.contains('playerHuman')
                                ||cell7.classList.contains('playerHuman') && cell5.classList.contains('playerHuman') && cell3.classList.contains('playerHuman')
                                ) {
        document.querySelector('#result').innerHTML = 'You won!';
        document.querySelector('.wrapper').classList.add('freeze');
        return true;
    }

    if (cell1.classList.contains('playerComputer') && cell2.classList.contains('playerComputer') && cell3.classList.contains('playerComputer')
        || cell4.classList.contains('playerComputer') && cell5.classList.contains('playerComputer') && cell6.classList.contains('playerComputer')
            || cell7.classList.contains('playerComputer') && cell8.classList.contains('playerComputer') && cell9.classList.contains('playerComputer')
                || cell1.classList.contains('playerComputer') && cell4.classList.contains('playerComputer') && cell7.classList.contains('playerComputer')
                    || cell2.classList.contains('playerComputer') && cell5.classList.contains('playerComputer') && cell8.classList.contains('playerComputer')
                        || cell3.classList.contains('playerComputer') && cell6.classList.contains('playerComputer') && cell9.classList.contains('playerComputer')
                            ||cell1.classList.contains('playerComputer') && cell5.classList.contains('playerComputer') && cell9.classList.contains('playerComputer')
                                ||cell7.classList.contains('playerComputer') && cell5.classList.contains('playerComputer') && cell3.classList.contains('playerComputer')
                                ) {
        document.querySelector('#result').innerHTML = 'You lost...';
        document.querySelector('.wrapper').classList.add('freeze');
        return true;
    }

    if (cell1.innerHTML == '.'
        && cell1.innerHTML == '.'
            && cell2.innerHTML == '.'
                && cell3.innerHTML == '.'
                    && cell4.innerHTML == '.'
                        && cell5.innerHTML == '.'
                            && cell6.innerHTML == '.'
                                && cell7.innerHTML == '.'
                                    && cell8.innerHTML == '.'
                                        && cell9.innerHTML == '.'
                                        ){
        document.querySelector('#result').innerHTML = 'Its a draw';
        document.querySelector('.wrapper').classList.add('freeze');
        return true;
        }
}

document.querySelector('#resetBtn').addEventListener('click', gameStart);
function gameStart() {
    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i].classList.remove('playerHuman');
        gameBoard[i].classList.remove('playerComputer');
        gameBoard[i].innerHTML = '';
    }
    document.querySelector('.wrapper').classList.remove('freeze');
    document.querySelector('#result').innerHTML = '';
    // document.querySelector('#result').innerHTML = '';
}

function getRandomNumber() {
    let aiMove = Math.floor(Math.random() * 9)
    aiPlacement(aiMove);
}

function aiPlacement(retrievedNumber) {
    let aiMove = retrievedNumber;
    console.log(aiMove);
    if (gameBoard[aiMove].classList.contains('playerHuman') || gameBoard[aiMove].classList.contains('playerComputer')) {
        getRandomNumber();
        return;
    } else {
        gameBoard[aiMove].classList.add('playerComputer');
        gameBoard[aiMove].innerHTML = '.'
        gameOver();
    }
}

cell1.addEventListener('click', function(){
    if (cell1.classList.contains('playerHuman') || cell1.classList.contains('playerComputer')) {
        return;
    } else {
        cell1.classList.add('playerHuman');
        cell1.innerHTML = '.'
    }
    if (gameOver() == true) {
        return;
    } else {
        getRandomNumber();
    }
})

cell2.addEventListener('click', function(){
    if (cell2.classList.contains('playerHuman') || cell2.classList.contains('playerComputer')) {
        return;
    } else {
        cell2.classList.add('playerHuman');
        cell2.innerHTML = '.'
    }
    if (gameOver() == true) {
        return;
    } else {
        getRandomNumber();
    }
})

cell3.addEventListener('click', function(){
    if (cell3.classList.contains('playerHuman') || cell3.classList.contains('playerComputer')) {
        return;
    } else {
        cell3.classList.add('playerHuman');
        cell3.innerHTML = '.'
    }
    if (gameOver() == true) {
        return;
    } else {
        getRandomNumber();
    }
})

cell4.addEventListener('click', function(){
    if (cell4.classList.contains('playerHuman') || cell4.classList.contains('playerComputer')) {
        return;
    } else {
        cell4.classList.add('playerHuman');
        cell4.innerHTML = '.'
    }
    if (gameOver() == true) {
        return;
    } else {
        getRandomNumber();
    }
})

cell5.addEventListener('click', function(){
    if (cell5.classList.contains('playerHuman') || cell5.classList.contains('playerComputer')) {
        return;
    } else {
        cell5.classList.add('playerHuman');
        cell5.innerHTML = '.'
    }
    if (gameOver() == true) {
        return;
    } else {
        getRandomNumber();
    }
})

cell6.addEventListener('click', function(){
    if (cell6.classList.contains('playerHuman') || cell6.classList.contains('playerComputer')) {
        return;
    } else {
        cell6.classList.add('playerHuman');
        cell6.innerHTML = '.'
    }
    if (gameOver() == true) {
        return;
    } else {
        getRandomNumber();
    }
})

cell7.addEventListener('click', function(){
    if (cell7.classList.contains('playerHuman') || cell7.classList.contains('playerComputer')) {
        return;
    } else {
        cell7.classList.add('playerHuman');
        cell7.innerHTML = '.'
    }
    if (gameOver() == true) {
        return;
    } else {
        getRandomNumber();
    }
})

cell8.addEventListener('click', function(){
    if (cell8.classList.contains('playerHuman') || cell8.classList.contains('playerComputer')) {
        return;
    } else {
        cell8.classList.add('playerHuman');
        cell8.innerHTML = '.'
    }
    if (gameOver() == true) {
        return;
    } else {
        getRandomNumber();
    }
})

cell9.addEventListener('click', function(){
    if (cell9.classList.contains('playerHuman') || cell9.classList.contains('playerComputer')) {
        return;
    } else {
        cell9.classList.add('playerHuman');
        cell9.innerHTML = '.'
    }
    if (gameOver() == true) {
        return;
    } else {
        getRandomNumber();
    }
})

