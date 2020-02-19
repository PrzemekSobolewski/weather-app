import React from 'react';
import './styles/App.css';
import Weather from './components/Weather';
import Region from './components/Region';
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

const App = () => {
    return (
        <div className={FullContent}>
            <div className={MainContent}>
                <Region/>
                <Weather/>
            </div>
            <FutureWeather/>
        </div>
    );
};

export default App;
