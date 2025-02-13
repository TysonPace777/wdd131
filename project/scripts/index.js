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

//Submit Button
const button = document.getElementById('button')

const games = [
    {
      id: "11111",
      name: "Action",
    },
    {
      id: "22222",
      name: "Horror",
    },
    {
      id: "33333",
      name: "Survival",
    },
    {
      id: "44444",
      name: "Fantasy",
    },
    {
      id: "55555",
      name: "Other",
    }
  ];
  
  const sct = document.getElementById('sct')
  
  games.forEach(game => {
    const option = document.createElement('option');
    option.textContent = game.name;
    option.value = game.id
    sct.appendChild(option);
  })
  
  function submitNumber() {
    let currentCount = JSON.parse(localStorage.getItem('Games Submitted')) || 0;
    currentCount++;
    localStorage.setItem('Reviews Submitted', JSON.stringify(currentCount));
  }
  
  button.addEventListener('click', () => {
    submitNumber()
  })