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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-49823.jpg"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 30",
        area: 32895,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-6600.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April, 24",
        area: 382207,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8454.jpg"
    },
    // Add more temple objects here...
  ];

const main = document.querySelector('main');

function displayTemples(templesToDisplay) {

    main.innerHTML = '';

    templesToDisplay.forEach(temple => {
        const div = document.createElement('div');
        
        const name = document.createElement('h2');
        name.textContent = temple.templeName;
        div.appendChild(name);

        const location = document.createElement('p');
        location.textContent = temple.location;
        div.appendChild(location);

        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        div.appendChild(dedicated);

        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area} sq ft`;
        div.appendChild(area);

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `Image of the ${temple.templeName} Temple`;
        img.loading = 'lazy';
        div.appendChild(img);

        main.appendChild(div);
    });
}


displayTemples(temples);

const navLinks = document.querySelectorAll('.navigation li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const filter = event.target.textContent;

        let filteredTemples = [];

        switch (filter) {
            case 'Home':
                filteredTemples = temples;
                break;
            case 'Old':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year < 1900;
                });
                break;
            case 'New':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year > 2000;
                });
                break;
            case 'Large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'Small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
        }

        displayTemples(filteredTemples);
    });
});



