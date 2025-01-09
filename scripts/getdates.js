const today = new Date();
const currentyear = document.querySelector("#year")

currentyear.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

const lastmodified = document.querySelector("#lastmodified");
lastmodified.innerHTML = `Last Modified: <span class="highlight">${document.lastmodified}</span>`;