/*
 * DOTS: Level Three
 *
 */

let ball = document.querySelector('.js-ball')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')

let score = 0

ball.addEventListener('click', function() {
    // some logic for updating score and checking for a win here
    score += 10
    scoreDisplay.innerText = score
    if(score >= 100){
       levelWinner.style.opacity = "1";
    }
})  