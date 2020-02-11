import React from 'react';
import './styles/App.css';
import Weather from './components/Weather'
import Region from './components/Region'
import {connect} from 'react-redux'


const App = (props) => {
    return (
        <div className="App">
            <Region/>
            <Weather
                city={props.city}
                feels_temp={props.feels_temp}
                temp={props.temp}
                temp_min={props.temp_min}
                temp_max={props.temp_max}
                pressure={props.pressure}
                clouds={props.clouds}
                wind={props.wind}
                desc={props.desc}
            />
        </div>
    );
};

const mapStoreToProps = (store) => {
    return {
        city: store.city,
        feels_temp: store.feels_temp,
        temp: store.temp,
        temp_min: store.temp_min,
        temp_max: store.temp_max,
        pressure: store.pressure,
        clouds: store.clouds,
        wind: store.wind,
        desc: store.desc
    }
};

export default connect(mapStoreToProps)(App);
