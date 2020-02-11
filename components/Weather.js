import React from 'react'
import {WiCloudyGusts} from 'weather-icons-react'

const Weather = (props) => {
    return(
        <div className={"weather"}>
            <div className={"city"}>
                <h1>{props.city}</h1>
            </div>
            <WiCloudyGusts size={200} color={'#000'}/>
            <div className={"desc"}>
                <h2>{props.desc}</h2>
            </div>
            {showTemperatures(props.temp, props.feels_temp, props.temp_min, props.temp_max)}
            <div className={"weatherDetails"}>
                <h4>
                    <span>{props.wind}</span>
                    <span>{props.pressure}</span>
                    <span>{props.clouds}</span>
                </h4>
            </div>
        </div>
    )
};

function showTemperatures(temp, feelsTemp, nightTemp, dayTemp) {
    return(
        <div className={'temperatures'}>
            <h2>
                <span className={'actualTemp'}>{temp}&deg;</span>
            </h2>
            <h3>
                <span className={'feelsTemp'}>{feelsTemp}&deg;</span>
            </h3>
            <h3>
                <span className={"nightTemp"}>{nightTemp}&deg;</span>
                <span className={"dayTemp"}>{dayTemp}&deg;</span>
            </h3>
        </div>
    )

}

export default Weather