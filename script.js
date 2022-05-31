const inputButton = document.getElementById("inputButton")
const userInput = document.getElementById("userInput")
inputButton.addEventListener('click', getWeatherBtn);
userInput.addEventListener('keydown', getWeather)
async function getWeather(){
    if(event.key === 'Enter'){
    let userInput = document.getElementById("userInput").value;
    let userRequest = "https://nominatim.openstreetmap.org/search/"+userInput+"?format=json";
    const responseFromApi = await fetch(userRequest);
    const data = await responseFromApi.json();
    const responseToUser = data[0];
    const lon = responseToUser.lon;
    const lat = responseToUser.lat;
    let weatherRequest = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=0add19c65d238de8a19d9686c17f47f4"
    const responseFromWeather = await fetch(weatherRequest);
    const dataWeather = await responseFromWeather.json();
    document.getElementById("result").innerHTML = dataWeather.weather[0].main + " | " +Number((dataWeather.main.temp-273.15).toFixed(1)) + "°C";
    document.getElementById("feelsLike").innerHTML ="Feels like - "+ Number((dataWeather.main.feels_like-273.15).toFixed(1)) + "°C";
    document.getElementById("wind").innerHTML = "Wind: " + dataWeather.wind.speed + " M/S";
}}
async function getWeatherBtn(){
    let userInput = document.getElementById("userInput").value;
    let userRequest = "https://nominatim.openstreetmap.org/search/"+userInput+"?format=json";
    const responseFromApi = await fetch(userRequest);
    const data = await responseFromApi.json();
    const responseToUser = data[0];
    const lon = responseToUser.lon;
    const lat = responseToUser.lat;
    let weatherRequest = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=0add19c65d238de8a19d9686c17f47f4"
    const responseFromWeather = await fetch(weatherRequest);
    const dataWeather = await responseFromWeather.json();
    document.getElementById("result").innerHTML = dataWeather.weather[0].main + " | " +Number((dataWeather.main.temp-273.15).toFixed(1)) + "°C";
}