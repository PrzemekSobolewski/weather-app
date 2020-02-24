import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from "../redux/actions/weatherAction";
import styled from '@emotion/styled';
import {css} from 'emotion';
import {IoIosSearch} from "react-icons/io"

const Icon = css({
    fontSize: "2.5em",
    marginBottom: "-0.35em",
    marginLeft: "-1.3em",
    ':hover':{
        cursor: "pointer",
        color: "#ff8080"
    }
});
const RegionSelector = css({
    marginTop: "3em",
    maxLength: "15"

});

const RegionInput = styled.input`
    font-size: 1.3em;
    height: 2.2em;
    width: 20em;
    padding-left: 0.7em;
    border: solid 2px grey;
    border-radius: 3em;
    &:focus {
        border-color: #8600b3;
        outline: none;
    }    
`;


const Region = () => {
    const weather = useSelector(state => state.myWeather);
    const [city, setCity] = useState(weather.city);
    const dispatch = useDispatch();

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(startFetchingWeather)
        } else {
            alert("Geolocation not supported on this browser")
        }
    };

    const startFetchingWeather = (position) => dispatch(actions.fetchWeatherFromLocation(position.coords.latitude,position.coords.longitude));

    useEffect(getLocation, []);

    const handleChange = (event) => setCity(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.fetchWeatherFromCity(city));
    };

    return (
        <div className={RegionSelector}>
            <RegionInput value={city} type={"text"} name={"city"} id={"city"} required
                         minlength="1" maxlength="15"
                   onChange={handleChange}/>
            <IoIosSearch className={Icon} onClick={handleSubmit} />
        </div>
    )

};

export default Region