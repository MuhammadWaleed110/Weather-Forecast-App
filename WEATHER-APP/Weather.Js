
const Apikey = "7972c73e40987f9774263eed2500aba0";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const serach_box = document.querySelector( ".search input" ) ;
const serach_button = document.querySelector( ".search button" ) ;
const weatherIcon = document.querySelector( ".weather-icon " ) ;


async function checkWeather ( city ){
    const response = await fetch(ApiUrl + city + `&appid=${Apikey}`);

    if ( response.status == 404 ){
        document.querySelector( ".error " ).Weather.display = ".block";
        document.querySelector( ".weather " ).Weather.display = ".none";
    }

    else{

        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp ) + "°C" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h " ;


    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "/WEATHER-IMAGES/clouds.png"
    }


    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "/WEATHER-IMAGES/clear.png"
    }


    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "/WEATHER-IMAGES/rain.png"
    }


    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/WEATHER-IMAGES/drizzle.png"
    }


    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "/WEATHER-IMAGES/mist.png"
    }




    }

}

serach_button.addEventListener("click", ()=>{
    checkWeather(serach_box.value);
} )

