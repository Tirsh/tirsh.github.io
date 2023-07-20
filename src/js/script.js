const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.menu__close');

hamburger.addEventListener('click', function(){
    menu.classList.add('active');
});

closeBtn.addEventListener('click', function(){
    menu.classList.remove('active');
});
