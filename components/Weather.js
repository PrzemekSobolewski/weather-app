import React from 'react'
import {WiCloudyGusts} from 'weather-icons-react'


const Weather = (props) => {
    return(
        <div className={"weather"}>
            <div className={"city"}>
                <h1>{props.city}</h1>
                <h2>{props.country}</h2>
            </div>
            <WiCloudyGusts size={200} color={'#000'}/>
            {showTemperatures(10, 20)}
            <div className={"desc"}>
                <h4>Sunny</h4>
            </div>
        </div>
    )
};

function showTemperatures(min, max) {
    return(
        <h2>
            <span className={"nightTemp"}>{min}&deg;</span>
            <span className={"dayTemp"}>{max}&deg;</span>
        </h2>
    )

}

export default Weather