const apiKey="cdf0db1c5697737f7f54b2b82240fd30"//API KEY
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=" //API URL
const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weathericon =document.querySelector('.weather-icon');
const bg = document.getElementById('background');

async function updateWeather(city){

    if(searchbox.value==="")
        {
        alert("Enter Your City Name");
    }
    else{
        const weather= await fetch(apiURL + city + `&appid=${apiKey}`); 
        var data= await weather.json();
        
    }

    if(data.cod === "404"){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather_app').style.display = "none";
    }
    else{
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.desc').innerHTML=data.weather[0].main;
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp) +"°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity +"%";
        document.querySelector('.wind').innerHTML=data.wind.speed+" Km/h";
    
        if(data.weather[0].main=='Clouds'){
            weathericon.src ="./images/clouds.png";
            bg.style.backgroundImage="url(./images/bgclouds.jpg)";
        }
        else if(data.weather[0].main=='Clear'){
            weathericon.src ="./images/clear.png";
            bg.style.backgroundImage="url(./images/bgclear.jpg)";
        }
        else if(data.weather[0].main=='Rain'){
            weathericon.src ="./images/rain.png";
            bg.style.backgroundImage="url(./images/bgrain.jpg)";
        }
        else if(data.weather[0].main=='Snow'){
            weathericon.src ="./images/snow.png";
            bg.style.backgroundImage="url(./images/bgsnow.jpg)";
        }
        else if(data.weather[0].main=='Drizzle'){
            weathericon.src ="./images/drizzle.png";
            bg.style.backgroundImage="url(./images/bgdrizzle.jpg)";
        }
        else if(data.weather[0].main=='Mist'){
            weathericon.src ="./images/mist.png";
            bg.style.backgroundImage="url(./images/bgmist.jpg)";
        }
        else if(data.weather[0].main=='Haze'){
            weathericon.src ="./images/mist.png";
            bg.style.backgroundImage="url(./images/bghaze.jpg)";
        }
        else if(data.weather[0].main=='Fog'){
            weathericon.src ="./images/mist.png";
            bg.style.backgroundImage="url(./images/bgfog.jpg)";
        }
        document.querySelector('.weather_app').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }

}

searchbtn.addEventListener("click", ()=>{
    updateWeather(searchbox.value);
})
searchbox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        updateWeather(searchbox.value);
    }
});