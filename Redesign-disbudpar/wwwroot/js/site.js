// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

    const apiKey = 'cfab2e47d70a22f05b460dc15e059bf0';
    const city = 'Brebes';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then((response) => response.json())
        .then((data) => {
            const location = 'Brebes';

            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('condition').textContent = data.weather[0].description;
    })
    .catch((error) => {
        console.error('Terjadi kesalahan:', error);
    });
