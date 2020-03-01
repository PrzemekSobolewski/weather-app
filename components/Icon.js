import React from 'react';
import Lottie from 'react-lottie'

import weatherMist from "../assets/lottie/weather-mist";
import weatherPartlyCloudy from "../assets/lottie/weather-partly-cloudy";
import weatherSnow from "../assets/lottie/weather-snow";
import weatherStorm from "../assets/lottie/weather-storm";
import weatherSunny from "../assets/lottie/weather-sunny";
import weatherWindy from "../assets/lottie/weather-windy";
import weatherPartlyShower from "../assets/lottie/weather-partly-shower";
const Icon = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: weatherSunny,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    if (props.icon <= 232)
        defaultOptions.animationData = weatherStorm;
    if (props.icon >= 300 && props.icon <= 321)
        defaultOptions.animationData = weatherPartlyShower;
    if (props.icon >= 500 && props.icon <= 521)
        defaultOptions.animationData = weatherPartlyShower;
    if (props.icon >= 600 && props.icon <= 622)
        defaultOptions.animationData = weatherSnow;
    if (props.icon >= 700 && props.icon <= 781)
        defaultOptions.animationData = weatherMist;
    if (props.icon === 800)
        defaultOptions.animationData = weatherSunny;
    if (props.icon === 801 || props.icon === 802)
        defaultOptions.animationData = weatherPartlyCloudy;
    if (props.icon > 802)
        defaultOptions.animationData = weatherWindy;

    return(
        <Lottie options={defaultOptions}
                height={props.size}
                width={props.size}
                isStopped={false}
                isPaused={false}
        />
    )
};

export default Icon;
