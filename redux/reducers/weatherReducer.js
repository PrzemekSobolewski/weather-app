import {UPDATE_CITY} from "../actions/weatherAction";

const initialState = {
    city: 'Warsaw',
    feels_temp: 0,
    temp: 0,
    temp_min: [0, 0, 0, 0, 0],
    temp_max: [0, 0, 0, 0, 0],
    pressure: 0,
    clouds: 0,
    wind: 0,
    desc: [0, 0, 0, 0, 0],
    icons: [0, 0, 0, 0, 0]
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
            desc: action.desc,
            icons: action.icon
        }
    }
    return state;
}