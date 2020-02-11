export const UPDATE_CITY = 'UPDATE_CITY';
const API_key = 'de238dfc0038a5d9b5162325e52dbdaf';

export const updateWeatherInfo = info => {
    console.log(info);
    return{
        type: UPDATE_CITY,
        city: info.name,
        temp: calcCelsius(info.main.temp),
        feels_temp: calcCelsius(info.main.feels_like),
        temp_min: calcCelsius(info.main.temp_min),
        temp_max: calcCelsius(info.main.temp_max),
        pressure: info.main.pressure,
        clouds: info.clouds.all,
        wind: info.wind.speed,
        desc: info.weather[0].description
    }
};

const calcCelsius = (temp) =>{
    return Math.floor(temp - 273.15)
};

export const updateCity = (city) => async dispatch =>{
    const apicall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
    const response = await apicall.json();
    dispatch(updateWeatherInfo(response))

};


