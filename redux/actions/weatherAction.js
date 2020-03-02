export const UPDATE_CITY = 'UPDATE_CITY';
const API_key = 'de238dfc0038a5d9b5162325e52dbdaf';
const PART_OF_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const updateWeatherInfo = (response)=> {
    return{
        type: UPDATE_CITY,
        city: response.city.name,
        temp: calcCelsius(response.list[0].main.temp),
        feels_temp: calcCelsius(response.list[0].main.feels_like),
        temp_min: [calcCelsius(response.list[0].main.temp_min),
            calcCelsius(response.list[1].main.temp_min),
            calcCelsius(response.list[2].main.temp_min),
            calcCelsius(response.list[3].main.temp_min),
            calcCelsius(response.list[4].main.temp_min)],
        temp_max: [calcCelsius(response.list[0].main.temp_max),
            calcCelsius(response.list[1].main.temp_max),
            calcCelsius(response.list[2].main.temp_max),
            calcCelsius(response.list[3].main.temp_max),
            calcCelsius(response.list[4].main.temp_max)],
        pressure: response.list[0].main.pressure,
        clouds: response.list[0].clouds.all,
        wind: response.list[0].wind.speed,
        desc: [response.list[0].weather[0].main,
            response.list[1].weather[0].main,
            response.list[2].weather[0].main,
            response.list[3].weather[0].main,
            response.list[4].weather[0].main],
        icon: [response.list[0].weather[0].id,
            response.list[1].weather[0].id,
            response.list[2].weather[0].id,
            response.list[3].weather[0].id,
            response.list[4].weather[0].id],
        timezone: response.city.timezone
    }
};

const calcCelsius = (temp) => Math.floor(temp - 273.15);

export const fetchWeatherFromCity = (city) => async dispatch => {
    await fetch(PART_OF_URL + `q=${city}&cnt=${5}&appid=${API_key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            dispatch(updateWeatherInfo(json));
        })
        .catch(err => console.log(err));
};

export const fetchWeatherFromLocation = (latitude, longitude) => async dispatch => {
    await fetch(PART_OF_URL + `lat=${latitude}&lon=${longitude}&cnt=${5}&appid=${API_key}`)
        .then(response => response.json())
        .then(json => dispatch(updateWeatherInfo(json)))
        .catch(err => console.log(err));

};


