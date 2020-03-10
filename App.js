import React from 'react';
import './styles/App.css';
import Weather from './components/Weather';
import Region from './components/Region';
import {css} from 'emotion';
import FutureWeather from './components/FutureWeather';
import clear_sky from './assets/wallpapers/clear_sky.jpg';
import clouds from './assets/wallpapers/clouds2.jpg';
import snow from './assets/wallpapers/snow.jpg';
import rain from './assets/wallpapers/rain.jpg';
import {useSelector} from "react-redux";



const FullContent = css({
    backgroundImage: `url(${clear_sky})`,
    backgroundSize: "cover",
    display: "flex",
    height: "100%",
    '@media (max-width: 600px)': {
        display: "grid"
    }
});

const MainContent = css({
    width: "100%",
    display: "flex",
    textAlign: "center",
    bottom: "0px",
    '@media (max-width: 1200px)': {
        display: "grid"
    }
});

const App = () => {
    const weather = useSelector(state => state.myWeather);

    function getWallpaper() {
        console.log(weather.icons[0]);
        if (weather.icons[0] <= 521)
            return rain;

        if (weather.icons[0] >= 600 && weather.icons[0] <= 622)
            return snow;

        if (weather.icons[0] <= 800 && weather.icons[0] > 801)
            return clear_sky;

        if (weather.icons[0] >= 801 || (weather.icons[0] >= 700 && weather.icons[0] <= 781))
            return clouds;

        return clear_sky;
    }

    return (
        <div className={FullContent} style={{backgroundImage: `url(${getWallpaper()})`}}>
            <div className={MainContent}>
                <Region/>
                <Weather/>
            </div>
            <FutureWeather/>
        </div>
    );
};

export default App;
