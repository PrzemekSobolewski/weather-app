import React, {useEffect} from 'react';
import {
    WiDayThunderstorm,
    WiShowers,
    WiSnowWind,
    WiRain,
    WiFog,
    WiThermometer,
    WiBarometer,
    WiMoonAltWaningCrescent3,
    WiDaySunny,
    WiStrongWind,
    WiCloudy,
    WiDayCloudy
} from 'weather-icons-react';
import {css} from 'emotion';
import styled from '@emotion/styled';

const MainWeather = css({
    float: "left",
    marginLeft: "20%"
});

const City = styled.h1`
    font-size: 5em;
`;

const CurrentDate = styled.div`
    font-size: 2em;
`;

const Desc = styled.div`
    margin-top: 1em;
    margin-left: -4em;
    font-weight: 700;
    font-size: 2.5em;
`;

const ActualTemp = styled.div`
    text-align: right;
    font-weight: 700;
    font-size: 2.5em;
    margin-right: -1em;
`;

const Details = styled.div`
    float: right;
    margin-top: 6em;
    margin-right: 10%;
    font-size: 2em;
    font-weight: 700;
    display: grid;
`;

const Weather = (props) => {
    const weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const month = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November, December"];

    const date = new Date();

    const getFullDate = (day) => date.getDate().toString() + " "
        + month[(date.getMonth())] + " "
        + date.getFullYear().toString() + " "
        + weekday[day];

    const selectIcon = (icon) => {
        switch (icon) {
            case (icon <= 232) :
                return <WiDayThunderstorm size={200} color={'#000'}/>;
            case (icon >= 300 && icon <= 321) :
                return <WiShowers size={200} color={'#000'}/>;
            case (icon >= 500 && icon <= 521) :
                return <WiRain size={200} color={'#000'}/>;
            case (icon >= 600 && icon <= 622) :
                return <WiSnowWind size={200} color={'#000'}/>;
            case (icon >= 700 && icon <= 781) :
                return <WiFog size={200} color={'#000'}/>;
            case (icon === 800) :
                return <WiDaySunny size={200} color={'#000'}/>;
            case (icon === 801 || icon === 802) :
                return <WiDayCloudy size={200} color={'#000'}/>;
            case (icon > 802) :
                return <WiCloudy size={200} color={'#000'}/>;
            default :
                return <WiDaySunny size={200} color={'#000'}/>;
        }
    };

    return(
        <div className={"weather"}>
            <City>{props.city}</City>
            <CurrentDate>{getFullDate(date.getDay())}</CurrentDate>
            <div className={MainWeather}>
                <Desc>{props.desc[0]}</Desc>
                {selectIcon(props.icons[0])}
                <ActualTemp><WiThermometer/>{props.temp[0]}&deg;C</ActualTemp>
            </div>
            <Details>
                <span className={'feelsTemp'}>{props.feels_temp}&deg;C</span>
                <span className={"nightTemp"}><WiMoonAltWaningCrescent3/>{props.temp_min[0]}&deg;C</span>
                <span className={"dayTemp"}><WiDaySunny/>{props.temp_max[0]}&deg;C</span>
                <span><WiStrongWind/>{props.wind} Mph</span>
                <span><WiBarometer/>{props.pressure} hPa</span>
                <span>{props.clouds}%</span>
            </Details>
        </div>
    )
};

export default Weather