const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.menu__close');

hamburger.addEventListener('click', function(){
    menu.classList.add('active');
});

closeBtn.addEventListener('click', function(){
    menu.classList.remove('active');
});

const values = document.querySelectorAll('.skills__ruler-value'),
    rulers =  document.querySelectorAll('.skills__ruler-front');

values.forEach((item,  i) => {
    rulers[i].style.width = item.innerHTML;
});
