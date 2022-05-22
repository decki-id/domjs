const
    ground = document.querySelectorAll('.ground'),
    mouse = document.querySelectorAll('.mouse'),
    scoreBoard = document.querySelector('.score');
let previousGround, finish, score;

function groundRandom(ground) {
    const
        g = Math.floor(Math.random() * ground.length),
        rGround = ground[g];
    if (rGround == previousGround) {
        groundRandom(ground);
    }
    previousGround = rGround;
    return rGround;
}

function timeRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function showMouse() {
    const
        rGround = groundRandom(ground),
        rTime = timeRandom(300, 1000);
    rGround.classList.add('arise');
    setTimeout(() => {
        rGround.classList.remove('arise');
        if (!finish) {
            showMouse();
        }
    }, rTime);
}

function start() {
    finish = false;
    score = 0;
    scoreBoard.textContent = score;
    showMouse();
    setTimeout(() => {
        finish = true;
    }, 10000);
}

function whack() {
    score++;
    this.parentNode.classList.remove('arise');
    scoreBoard.textContent = score;
}

mouse.forEach(m => {
    m.addEventListener('click', whack);
})