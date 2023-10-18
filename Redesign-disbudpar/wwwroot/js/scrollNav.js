window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar-beranda');
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 590) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
});
