import React from 'react';
import {useSelector} from 'react-redux'
import {
    WiThermometer,
    WiBarometer,
    WiMoonAltWaningCrescent3,
    WiDaySunny,
    WiStrongWind,
    WiCloudy,
} from 'weather-icons-react';
import {MdPerson} from "react-icons/md";
import {css} from 'emotion';
import styled from '@emotion/styled';
import Icon from "./Icon";

const MainWeather = css({
    float: "left",
    marginLeft: "20%",
    fontSize: "3em",
    fontWeight: "700"
});

const City = styled.h1`
    font-size: 5em;
    margin: 0.5em 0 0.2em 0;
`;

const CurrentDate = styled.div`
    font-size: 2em;
`;

const Desc = styled.div`
    text-align: right;
    margin: -0.2em -1.8em 0 0;
`;

const ActualTemp = styled.div`
    margin: 0.9em 0 0 -4em;
`;

const DetailsContainer = styled.div`
    text-align: left;
    float: right;
    margin-top: 3em;
    margin-right: 10%;
    font-size: 1.6em;
    font-weight: 400;
    display: flex;
    flex-direction: column;
`;

const DetailsIcons = css({
    marginBottom: '-0.2em'
});

const Detail = styled.span`
    padding-bottom: 0.5em;
`;

const Weather = () => {
    const weather = useSelector(state => state.myWeather);

    const weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const month = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November, December"];

    const date = new Date();

    const getFullDate = (day) => date.getDate().toString() + " "
        + month[(date.getMonth())] + " "
        + date.getFullYear().toString() + ", "
        + weekday[day];

    return(
        <div className={"weather"}>
            <City>{weather.city}</City>
            <CurrentDate>{getFullDate(date.getDay())}</CurrentDate>
            <div className={MainWeather}>
                <ActualTemp><WiThermometer className={DetailsIcons}/>{weather.temp}&deg;C</ActualTemp>
                <Icon
                    icon={weather.icons[0]}
                    size={200}
                    color={'#000'}/>
                <Desc>{weather.desc[0]}</Desc>
            </div>
            <DetailsContainer>
                <Detail><MdPerson style={{marginBottom: "-0.15em"}}/> Feels like: {weather.feels_temp} &deg;C</Detail>
                <Detail><WiMoonAltWaningCrescent3 className={DetailsIcons}/> Min. temp.: {weather.temp_min[0]} &deg;C</Detail>
                <Detail><WiDaySunny className={DetailsIcons}/> Max. temp.: {weather.temp_max[0]} &deg;C</Detail>
                <Detail><WiStrongWind className={DetailsIcons}/> Wind speed: {weather.wind} mph</Detail>
                <Detail><WiBarometer className={DetailsIcons}/> Pressure: {weather.pressure} hPa</Detail>
                <Detail><WiCloudy className={DetailsIcons}/> Cloudy: {weather.clouds} %</Detail>
            </DetailsContainer>
        </div>
    )
};

export default Weather