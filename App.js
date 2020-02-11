import React from 'react';
import './styles/App.css';
import Weather from './components/Weather'
import Region from './components/Region'

const API_key = 'de238dfc0038a5d9b5162325e52dbdaf';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            city:undefined,
            country: undefined
        };
        this.getWeather()
    }

    getWeather = async() => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Warszawa,Polska&appid=${API_key}`);

        const response = await api_call.json();

        console.log(response)
    };
    render() {
        return (
            <div className="App">
                <Region/>
                <Weather/>
            </div>
        );
    };
}

export default App;
