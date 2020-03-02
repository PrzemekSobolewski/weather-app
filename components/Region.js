import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from "../redux/actions/weatherAction";
import styled from '@emotion/styled';
import {css} from 'emotion';
import {IoIosSearch} from "react-icons/io"
import Clock from './Clock';
import {useCookies, CookiesProvider} from 'react-cookie';

const Icon = css({
    fontSize: "2.5em",
    marginTop: "0.1em",
    marginLeft: "-1.3em",
    float: "left",
    color: "white",
    ':hover': {
        cursor: "pointer",
        color: "#ff8080"
    }
});
const RegionSelector = css({
    paddingTop: "3em",
    maxLength: "15",
});

const RegionInput = styled.input`
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    color: white;
    float: left;
    font-size: 1.3em;
    height: 2.2em;
    width: 15em;
    border-radius: 15px;
    margin-left: 3em;
    padding-left: 0.7em;
    &:focus {
        background-color: rgba(0, 0, 0, 0.5);
        outline: none;
    }    
`;

const LocalTime = css({
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    float: "left",
    padding: "0.2em",
    borderRadius: "15px",
    margin: "2em 0 0 4em",
    color: "white",
    fontSize: "2em",
    textAlign: "center",
    width: "5em"
});


const Region = () => {
    const weather = useSelector(state => state.myWeather);
    const [city, setCity] = useState(null);
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['city']);

    const getLocationByCookies = () => {
        dispatch(actions.fetchWeatherFromCity(cookies.city));
    };

    const getLocation = () => {
        if (cookies.city !== undefined) getLocationByCookies();
        else if (navigator.geolocation) navigator.geolocation.getCurrentPosition(startFetchingWeather)
        else alert("Geolocation not supported on this browser")
    };

    const startFetchingWeather = (position) => dispatch(actions.fetchWeatherFromLocation(position.coords.latitude, position.coords.longitude));

    useEffect(getLocation, []);

    const handleChange = (event) => setCity(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.fetchWeatherFromCity(city));
        setCookie('city', city, {path: '/'});
    };

    return (
        <CookiesProvider>
            <div style={{display: "grid"}}>
                <div className={RegionSelector}>
                    <RegionInput value={city} type={"text"} name={"city"}
                                 id={"city"} required
                                 minlength="1" maxlength="15"
                                 onChange={handleChange}/>
                    <IoIosSearch className={Icon} onClick={handleSubmit}/>

                </div>
                <div className={LocalTime}>
                    <Clock/>
                </div>
            </div>
        </CookiesProvider>
    )

};

export default Region