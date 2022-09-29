'use strict'
const navBarButton = document.querySelector('.navButton');
const header = document.querySelector('header');

navBarButton.addEventListener('click', () => {
    header.classList.toggle('header--active');
    navBarButton.classList.toggle('navButton--active')
})