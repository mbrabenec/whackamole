'use strict';
 
const button = document.querySelector('.button');
const scoreEl = document.querySelector('.score');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
 
let score = 0;
let timeUp = false;
 
const randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}
 
const randomHole = (holes) => {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    return hole;
}
 
const peep = () => {
    const time = randomTime(400, 800);
    const hole = randomHole(holes);
 
    hole.classList.add('active');
 
    setTimeout(() => {
        hole.classList.remove('active');
        if(!timeUp) {
            peep();
        }
    }, time);
}
 
const whack = () => {
    score++;
    scoreEl.textContent = score;
}
 
const hide = () => {
    holes.forEach((hole) => hole.classList.remove('active'));
}
 
moles.forEach((mole) => {
    mole.addEventListener('click', () => {
        whack();
        hide();
    });
});
 
button.addEventListener('click', () => {
    score = 0;
    scoreEl.textContent = 0;
    timeUp = false;
 
    peep();
 
    setTimeout(() => {
        timeUp = true;
    }, 15000);
});
