// Date

const today = new Date();

const currentyear = document.querySelector("#currentyear")
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastmodified = document.querySelector("#lastmodified");
lastmodified.innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

// Menu Button

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});