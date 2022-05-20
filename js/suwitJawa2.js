const
    comImage = document.querySelector('.img-komputer'),
    option = document.querySelectorAll('li img');

function getComOption() {
    const c = Math.random();
    if (c < 0.34) return 'gajah';
    if (c >= 0.34 && c < 0.67) return 'orang';
    return 'semut';
}

function getResult(c, p) {
    if (p == c) return 'SERI!';
    if (p == 'gajah') return (c == 'orang') ? 'MENANG!' : 'KALAH!';
    if (p == 'orang') return (c == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (p == 'semut') return (c == 'orang') ? 'KALAH!' : 'MENANG!';
}

function turn() {
    const
        image = ['gajah', 'semut', 'orang'],
        startTime = new Date().getTime();;
    let i = 0;
    setInterval(function () {
        if (new Date().getTime() - startTime > 1000) {
            clearInterval();
            return;
        }
        comImage.setAttribute('src', 'img/' + image[i++] + '.png');
        if (i == image.length) i = 0;
    }, 100)
}

// const pElephant = document.querySelector('.gajah');
// pElephant.addEventListener('click', function () {
//     const
//         comOption = getComOption(),
//         pOption = pElephant.className,
//         result = getResult(comOption, pOption),
//         info = document.querySelector('.info');
//     comImage.setAttribute('src', 'img/' + comOption + '.png');
//     info.innerHTML = result;
// })

// const pHuman = document.querySelector('.orang');
// pHuman.addEventListener('click', function () {
//     const
//         comOption = getComOption(),
//         pOption = pHuman.className,
//         result = getResult(comOption, pOption),
//         info = document.querySelector('.info');
//     comImage.setAttribute('src', 'img/' + comOption + '.png');
//     info.innerHTML = result;
// })

// const pAnt = document.querySelector('.semut');
// pAnt.addEventListener('click', function () {
//     const
//         comOption = getComOption(),
//         pOption = pAnt.className,
//         result = getResult(comOption, pOption),
//         info = document.querySelector('.info');
//     comImage.setAttribute('src', 'img/' + comOption + '.png');
//     info.innerHTML = result;
// })

option.forEach(function (opt) {
    opt.addEventListener('click', function () {
        const
            comOption = getComOption(),
            pOption = opt.className,
            result = getResult(comOption, pOption),
            info = document.querySelector('.info');
        turn();
        setTimeout(function () {
            comImage.setAttribute('src', 'img/' + comOption + '.png');
            info.innerHTML = result;
        }, 1000);
    })
})