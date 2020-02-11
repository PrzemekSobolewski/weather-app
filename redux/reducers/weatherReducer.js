import {UPDATE_CITY} from "../actions/weatherAction";

const initialState = {
    city: 'Warsaw',
    feels_temp: '0',
    temp: '20',
    temp_min: '0',
    temp_max: '0',
    pressure: '0',
    clouds: 'idk',
    wind: '0',
    desc: 'none'
};

export default (state = initialState, action) => {
    if(action.type === UPDATE_CITY) {
        return {
            ...state,
            city: action.city,
            feels_temp: action.feels_temp,
            temp: action.temp,
            temp_min: action.temp_min,
            temp_max: action.temp_max,
            pressure: action.pressure,
            clouds: action.clouds,
            wind: action.wind,
            desc: action.desc

        }
    }
    return state;
}