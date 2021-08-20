const header=document.querySelector('.navbar');
const navbar=document.querySelector('#mobile-menu');
const menu=document.querySelector('.navbar__menu');

navbar.addEventListener('click',()=>{
    menu.classList.toggle('active');
    navbar.classList.toggle('active')
})

window.addEventListener('scroll',()=>{
    const scrollPos=window.scrollY;

    if (scrollPos > 10) {
        header.classList.add('scrolled')
        
    } else {
        header.classList.remove('scrolled')
        
    }
})