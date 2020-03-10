import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux'
import {
    WiBarometer,
    WiStrongWind,
    WiCloudy,
} from 'weather-icons-react';
import {MdPerson} from "react-icons/md";
import {css, keyframes} from 'emotion';
import styled from '@emotion/styled';
import {MdLocationOn} from "react-icons/md"
import Icon from "./Icon";

const transitionIn = keyframes`
    from {
        opacity: 0;
        transform: rotateX(-10deg);
    }
    to {
        opacity: 1;
        transform: rotateX(0deg);
    }
`;

const MainWeather = css({
    transition: "all 0.3s ease",
    width: "20em",
    borderRadius: "10px",
    float: "right",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    ':hover':{
        transform: "scale(1.1)",
        transformOrigin: "right",
        transition: "all 0.3s ease",
    },
    '@media (max-width: 1200px)': {
        float: "none",
        width: "16em",
        margin: "1em"
    },
    '@media (max-width: 600px)': {
        margin: "0.5em"
    }
});

const City = styled.h1` 
    font-size: 2em;
    margin: 0.5em 0em 1em 0;
    @media (max-width: 1200px) {
        font-size: 1.5em;
    }
    @media (max-width: 350px) {
        margin: 0.5em 0em 0.5em 0;
    }
`;

const CurrentDate = styled.div`
    margin: 0.5em 0em 1em 0;
    font-size: 1.5em;
    @media (max-width: 1200px) {
        font-size: 1.2em;
    }
`;

const Desc = styled.div`
    text-align: center;
    font-size: 2em;
    @media (max-width: 1200px) {
        font-size: 1.5em;
    }
    
`;

const ActualTemp = styled.div`
    padding: 1em;
    @media (max-width: 350px) {
        padding: 0.5em;
    }
`;

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`;

const SubDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    margin: 1em;
    width: 100%;
`;


const DetailsIcons = css({
    marginBottom: '-0.15em',
    paddingRight: '0.2em',
    textAlign: 'left'
});

const CityIcons = css({
    margin: "0 0.2em -0.1em 0"
});

const Detail = styled.div`
    font-size: 2em;
    width: 50%;
    @media (max-width: 1200px) {
        font-size: 1.5em;
    }
`;

const CurrentWeather = css`
    animation: ${transitionIn} 1s;
`;
const CurrentDay = css`
    color: rgba(255, 255, 255, 1);
    display: flex;
    flex: auto;
    align-items: center;
    justify-content: center;
`;


const Weather = () => {
    const weatherRef = useRef(null);
    const [width, setWidth] = useState(1300);

    const weather = useSelector(state => state.myWeather);

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November, December"];

    const date = new Date();

    const getFullDate = (day) => date.getDate().toString() + " "
        + month[(date.getMonth())] + " "
        + date.getFullYear().toString() + ", "
        + weekday[day];

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        weatherRef.current.classList.add(CurrentWeather);
        setTimeout(() => {
            weatherRef.current.classList.remove(CurrentWeather)
        }, 500)
    });

    return (
        <div className={CurrentDay} ref={weatherRef}>
            <div className={MainWeather}>
                <CurrentDate>{getFullDate(date.getDay())}</CurrentDate>
                <City><MdLocationOn className={CityIcons}/>{weather.city}</City>
                <Icon
                    icon={weather.icons[0]}
                    size={(width > 1200) ? 200 : 150}
                    color={'#FFF'}/>
                <Desc>{weather.desc[0]} <ActualTemp>{weather.temp}&deg;C</ActualTemp></Desc>
                <DetailsContainer>
                    <SubDetailsContainer>
                        <Detail><MdPerson className={DetailsIcons}/>{weather.feels_temp}&deg;</Detail>
                        <Detail><WiStrongWind className={DetailsIcons}/>{weather.wind}</Detail>
                    </SubDetailsContainer>
                    <SubDetailsContainer>
                        <Detail><WiBarometer className={DetailsIcons}/>{weather.pressure}</Detail>
                        <Detail><WiCloudy className={DetailsIcons}/>{weather.clouds}%</Detail>
                    </SubDetailsContainer>
                </DetailsContainer>
            </div>
        </div>
    )
};

export default Weather