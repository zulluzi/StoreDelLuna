const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const test1 = document.querySelector('.content')

menuToggle.addEventListener('click', function (){
    nav.classList.toggle('slide');
    test1.classList.toggle('turun');
});

