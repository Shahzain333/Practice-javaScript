//console.log(parseInt(Math.random() * 100 + 1))

let randomNumber = parseInt(Math.random() * 100 + 1 );

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lower_high = document.querySelector('.LowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); 


let prevGuess = []         // This varaiable is initialize for same guess are not use for next attempt
let num_guess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();

        const guess = parseInt(userInput.value)
        //console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess (guess) {                  // check the guess either its less than 1 or alphabets
    
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else {
        prevGuess.push(guess)
        if(num_guess === 11){
            cleanUpGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            cleanUpGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess) {
    if(guess === randomNumber){
        displayMessage(`You Guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function cleanUpGuess (guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    num_guess++;
    remaining.innerHTML = `${11 - num_guess}` 
}

function displayMessage (message) {
    lower_high.innerHTML = `<h3>${message}</h3>`
}

function newGame () {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => { 
        randomNumber = randomNumber
        prevGuess = []
        num_guess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - num_guess}`
        userInput.removeAttribute('disabled','')
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame () {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}
















