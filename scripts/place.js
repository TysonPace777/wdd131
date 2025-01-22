const today = new Date();

const currentyear = document.querySelector("#currentyear")
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastmodified = document.querySelector("#lastmodified");
lastmodified.innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

// weather

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}

function updateWindChill() {
    const temperature = 1; // Celsius
    const windSpeed = 14; // km/h

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.querySelector('.weather ul li:nth-child(4)').textContent = `Wind Chill: ${windChill}°C`;
    } else {
        document.querySelector('.weather ul li:nth-child(4)').textContent = 'Wind Chill: N/A';
    }
}

window.addEventListener('load', updateWindChill);