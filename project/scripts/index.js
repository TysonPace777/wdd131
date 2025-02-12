//Date
const today = new Date();

const currentyear = document.querySelector("#currentyear")
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastmodified = document.querySelector("#lastmodified");
lastmodified.innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

//Button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const body = document.body;
const header = document.querySelector('header');
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

    if (!hamButton.classList.toggle('open')) {
        body.style.display = 'grid';
    }
});