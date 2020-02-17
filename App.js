import React from 'react';
import './styles/App.css';
import Weather from './components/Weather';
import Region from './components/Region';
import {connect} from 'react-redux';
import {css} from 'emotion';
import FutureWeather from './components/FutureWeather';

const FullContent = css({
    display: "flex",
    height: "100%"
});

const MainContent = css({
    background: "rgb(207,100,100)",
    background: "linear-gradient(90deg, rgba(207,100,100,1) 37%, rgba(131,58,180,1) 100%, rgba(252,176,69,1) 100%);",
    textAlign: "center",
    bottom:"0px",
    width: "100%",
    height: "100%",
    alignItems: "center"
});

const App = (props) => {
    return (
        <div className={FullContent}>
            <div className={MainContent}>
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
                    icons={props.icons}
                />
            </div>

            <FutureWeather
                temp={props.temp}
                temp_min={props.temp_min}
                temp_max={props.temp_max}
                desc={props.desc}
                icons={props.icons}
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
        desc: store.desc,
        icons: store.icons
    }
};

export default connect(mapStoreToProps)(App);
