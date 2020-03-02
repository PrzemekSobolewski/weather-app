import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'

const Clock = () => {
    const [time, setTime] = useState(null);
    const weather = useSelector(state => state.myWeather);

    useEffect(() => {
        const interval =  setInterval(() => {
            console.log(weather.timezone);
            let currentTime = new Date();
            let offset = (weather.timezone / 3600) + (currentTime.getTimezoneOffset() / 60);
            let hours = currentTime.getHours() + offset;
            if (hours > 24) hours = hours - 24;
            if (hours < 0) hours = Math.abs(hours);
            let minutes = currentTime.getMinutes();

            if (minutes < 10) {
                minutes = "0" + minutes
            }
            let zoneTime = hours + ":" + minutes + " ";
            if (hours > 11) {
                zoneTime += "PM";
            } else {
                zoneTime += "AM";
            }
            setTime(zoneTime)
        }, 200);
        return () => clearInterval(interval);
    }, [weather.timezone]);

    return (
        <div>
            {time}
        </div>
    )
};

export default Clock