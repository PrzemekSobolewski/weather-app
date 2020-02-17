import React, {useState, useEffect} from 'react'
import {connect, useDispatch} from 'react-redux'
import * as actions from "../redux/actions/weatherAction";

const Region = (props) => {
    const [city, setCity] = useState(props.city);
    const dispatch = useDispatch();

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(startFetchingWeather)
        } else {
            alert("Geolocation not supported on this browser")
        }
    };

    const startFetchingWeather = (position) => {
        dispatch(actions.fetchWeatherFromLocation(position.coords.latitude,position.coords.longitude))
    };

    useEffect(getLocation, []);

    const handleChange = (event) => {
        setCity(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.fetchWeatherFromCity(city));
    };

    return (
        <div>
            <form id={'regionForm'} method='POST'
                  onSubmit={handleSubmit}>
                <input className={"region"} value={city} type={"text"} name={"city"} id={"city"}
                       onChange={handleChange}/>
                <button type='submit' className='submitButton'>GET WEATHER</button>
            </form>
        </div>
    )

};

const mapStoreToProps = (store) => {
    return {
        city: store.city,
    }
};


export default connect(mapStoreToProps)(Region)