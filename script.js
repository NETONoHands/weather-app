const API_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
const API_KEY = 'e2c9be569dc1a34baf47e941c678e598';

const pesquisa = document.getElementById('pesquisaInput');
const botaoPesquisa = document.getElementById('botaoPesquisa');

async function obterClima() {
    const resposta = await fetch(API_URL + `&q=${pesquisa.value}` + `&appid=${API_KEY}`);
    const dados = await resposta.json();

    document.getElementById('city').innerText = dados.name;
    document.getElementById('temp').innerText = Math.round(dados.main.temp) + '°C';
    document.getElementById('umidade').innerText = dados.main.humidity + '%';
    document.getElementById('vento').innerText = dados.wind.speed + 'km/h';
    
    const idClima = dados.weather[0].id;
    
    if (idClima >= 200 && idClima < 300) {
        document.getElementById('weather-icon').src = '/images/storm.png';
    } else if (idClima >= 300 && idClima < 399) {
        document.getElementById('weather-icon').src = '/images/drizzle.png';
    } else if (idClima >= 500 && idClima < 599) {
        document.getElementById('weather-icon').src = '/images/rain.png';
    } else if (idClima >= 600 && idClima < 699) {
        document.getElementById('weather-icon').src = '/images/snow.png';
    } else if (idClima >= 700 && idClima < 799) {
        document.getElementById('weather-icon').src = '/images/mist.png';
    } else if (idClima === 800) {
        document.getElementById('weather-icon').src = '/images/clear.png';
    } else {
        document.getElementById('weather-icon').src = '/images/clouds.png';
    } 

    document.querySelector('.weather').style.display = 'block';
};

botaoPesquisa.addEventListener('click', () => {
    obterClima();
});

pesquisa.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
        obterClima();
    }

});

