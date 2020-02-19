import React from 'react';
import {
    WiDayThunderstorm,
    WiShowers,
    WiSnowWind,
    WiRain,
    WiFog,
    WiDaySunny,
    WiCloudy,
    WiDayCloudy
} from 'weather-icons-react';

const Icon = (props) => {
    if (props.icon <= 232)
        return <WiDayThunderstorm size={props.size} color={props.color}/>;
    if (props.icon >= 300 && props.icon <= 321)
        return <WiShowers size={props.size} color={props.color}/>;
    if (props.icon >= 500 && props.icon <= 521)
        return <WiRain size={props.size} color={props.color}/>;
    if (props.icon >= 600 && props.icon <= 622)
        return <WiSnowWind size={props.size} color={props.color}/>;
    if (props.icon >= 700 && props.icon <= 781)
        return <WiFog size={props.size} color={props.color}/>;
    if (props.icon === 800)
        return <WiDaySunny size={props.size} color={props.color}/>;
    if (props.icon === 801 || props.icon === 802)
        return <WiDayCloudy size={props.size} color={props.color}/>;
    if (props.icon > 802)
        return <WiCloudy size={props.size} color={props.color}/>;
    return <WiDaySunny size={props.size} color={props.color}/>;
};

export default Icon;
