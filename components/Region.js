import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from "../redux/actions/weatherAction";
import styled from '@emotion/styled';
import {css} from 'emotion';
import {IoIosSearch} from "react-icons/io"
import Clock from './Clock';
import {useCookies, CookiesProvider} from 'react-cookie';

const RegionContent = css({
    display: "grid",
    flexGrow: "1",
});

const Icon = css({
    fontSize: "3em",
    marginLeft: "-1.3em",
    float: "left",
    color: "white",
    ':hover': {
        cursor: "pointer",
        color: "#ff8080"
    },
    '@media (max-width: 1200px)': {
        float: "none",
        fontSize: "2.5em",
        margin: "0em 0em 0 -1.2em",
    },
    '@media (max-width: 600px)': {
        marginTop: "0.5em"
    },
    '@media (max-width: 350px)': {
        fontSize: "2em",
    }
});

const RegionSelector = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxLength: "15",
    alignSelf: "center",
    justifySelf: "center",
});

const RegionInput = styled.input`
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
    color: white;
    float: left;
    font-size: 1.7em;
    height: 2.2em;
    width: 15em;
    border-radius: 15px;
    padding-left: 0.7em;
    &:focus {
        background-color: rgba(0, 0, 0, 0.7);
        outline: none;
    }
    @media (max-width: 1200px) {
        font-size: 1.3em;
        margin-left: -0.5em;
    }
    @media (max-width: 600px) {
        font-size: 1.3em;
        margin-left: -0.5em;
        margin-top: 1em;
    }
    @media (max-width: 350px) {
        font-size: 1em;
    }
`;

const LocalTime = css({
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "0.2em",
    borderRadius: "15px",
    color: "white",
    fontSize: "2.5em",
    textAlign: "center",
    width: "5em",
    alignSelf: "start",
    justifySelf: "center",
    '@media (max-width: 1200px)': {
        fontSize: "1.7em",
        alignSelf: "center"
    },
    '@media (max-width: 600px)': {
        fontSize: "1.7em",
        alignSelf: "center",
        marginTop: "0.5em"
    },
    '@media (max-width: 350px)': {
        fontSize: "1.2em",
    }
});


const Region = () => {
    const [city, setCity] = useState(null);
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['city']);

    const getLocationByCookies = () => {
        dispatch(actions.fetchWeatherFromCity(cookies.city));
    };

    const getLocation = () => {
        if (cookies.city !== undefined) getLocationByCookies();
        else if (navigator.geolocation) navigator.geolocation.getCurrentPosition(startFetchingWeather);
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
            <div className={RegionContent}>
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