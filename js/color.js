const changeColor = document.getElementById('changeColor');
changeColor.onclick = function () {
    document.body.classList.toggle('light-blue');
}

const
    randomColor = document.createElement('button'),
    buttonText = document.createTextNode('Random Color');
randomColor.appendChild(buttonText);
randomColor.setAttribute('type', 'button');
changeColor.after(randomColor);

randomColor.addEventListener('click', function () {
    const
        r = Math.round(Math.random() * 256),
        g = Math.round(Math.random() * 256),
        b = Math.round(Math.random() * 256);
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

const
    sRed = document.querySelector('input[name=sRed]'),
    sGreen = document.querySelector('input[name=sGreen]'),
    sBlue = document.querySelector('input[name=sBlue]');

sRed.addEventListener('input', function () {
    const
        r = sRed.value,
        g = sGreen.value,
        b = sBlue.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

sGreen.addEventListener('input', function () {
    const
        r = sRed.value,
        g = sGreen.value,
        b = sBlue.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

sBlue.addEventListener('input', function () {
    const
        r = sRed.value,
        g = sGreen.value,
        b = sBlue.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

document.body.addEventListener('mousemove', function (e) {
    const
        xPos = Math.round((e.clientX / window.innerWidth) * 255),
        yPos = Math.round((e.clientY / window.innerWidth) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 100)';
});