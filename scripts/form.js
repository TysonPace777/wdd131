const button = document.getElementById('button');

const today = new Date();

const currentyear = document.querySelector("#currentyear")
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastmodified = document.querySelector("#lastmodified");
lastmodified.innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const sct = document.getElementById('sct')

products.forEach(product => {
  const option = document.createElement('option');
  option.textContent = product.name;
  option.value = product.id
  sct.appendChild(option);
})

function submitNumber() {
  let currentCount = JSON.parse(localStorage.getItem('Reviews Submitted')) || 0;
  currentCount++;
  localStorage.setItem('Reviews Submitted', JSON.stringify(currentCount));
}

button.addEventListener('click', () => {
  submitNumber()
})