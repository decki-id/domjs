// Event Handling
// const
//     close = document.querySelector('.close'),
//     card = document.querySelector('.card');
// close.addEventListener('click', function () {
//     card.style.display = 'none';
// })

// DOM Traversal
// const
//     close = document.querySelectorAll('.close'),
//     card = document.querySelectorAll('.card');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//     })
// }
// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); // Prevent Default
//         e.stopPropagation(); // Avoid Event Bubbling from parent
//     })
// })
// card.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         alert('OK!');
//     })
// })

const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    if (e.target.classList.contains('close')) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})