const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
const closeHome = document.querySelector('nav ul li .nav-home');
const closeProduct = document.querySelector('nav ul li .nav-product');

hamburger.addEventListener('click' , () => {
    nav.classList.toggle('slide');
})

closeHome.addEventListener('click' , () => {
    const checkBox = document.getElementById('box');
    checkBox.click();
});

closeProduct.addEventListener('click' , () => {
    const checkBox = document.getElementById('box');
    checkBox.click();
});