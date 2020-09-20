
let API_KEY = "ccf07dcb9503f0f13eb15ed24f7d22be";


getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;

  const weatherData = fetch(FULL_URL);

  return weatherData.then((response) => {
      return response.json();
  })

 
}



searchCity = () => {
  const city = document.getElementById('city-input').value;
  
  getWeatherData(city).then((response) => {
   
    showWeatherData(response);
  }).catch((error => {
    return error;
  }));


}


showWeatherData = (weatherData) => {
  
  const src = " http://openweathermap.org/img/wn/";
  const icon = weatherData.weather[0].icon;
  const fullSrc = `${src}${icon}@2x.png`;
  
  document.getElementById('city-name').innerText = weatherData.name;

  document.getElementById('weather-type').setAttribute("src", fullSrc);

  document.getElementById('temp').innerText = weatherData.main.temp;

  document.getElementById('min-temp').innerText = weatherData.main.temp_min;

  document.getElementById('max-temp').innerText = weatherData.main.temp_max;
  
}

