const
    thumbnail = document.querySelector('.thumbnail'),
    jumbo = document.querySelector('.jumbo'),
    thumbs = document.querySelectorAll('.thumb');

thumbnail.addEventListener('click', function (e) {
    // check if the thumbnail is clicked
    if (e.target.className = 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);
        thumbs.forEach(function (thumb) {
            thumb.className = 'thumb';
        })
        e.target.classList.add('active');
    }
})