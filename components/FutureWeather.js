import React, {useEffect, useRef} from 'react';
import {css, keyframes} from 'emotion';
import styled from '@emotion/styled';
import Icon from './Icon';
import {useSelector} from "react-redux";

const transitionIn = keyframes`
    from {
        opacity: 0;
        transform: rotateX(-10deg);
    }
    to {
        opacity: 1;
        transform: rotateX(0deg);
    }
`;

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    height: calc(25% - 1px);;
    width: 20em;
    border-bottom: 1px solid white;
`;

const Animation = css`
    animation: ${transitionIn} 1s;
`;
const Temp = styled.span`
    color: rgba(255, 255, 255, 1);
    padding: 2.2em 0em 1em 1em;
    font-size: 1.6em;
    display: grid;
    text-align: center;
    float: left;
    width: 40%;
`;

const Dates = styled.div`
    color: rgba(255, 255, 255, 1);
    padding-top: 1em;
    text-align: center;
    font-size: 1.2em;
    font-weight: 700;
`;

const Desc = css({
    color: "rgba(255, 255, 255, 1)",
    paddingTop: '1em',
    float: 'right',
    width: '40%',
    fontWeight: '700',
    marginRight: '1em'
});


const FutureWeather = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const animatedWeather = [ref1, ref2, ref3, ref4];
    const weather = useSelector(state => state.myWeather);
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November, December"];

    useEffect(() => {
        for(let i = 0; i < 4; i++) {
            animatedWeather[i].current.classList.add(Animation);
        }

        setTimeout(() => {
            for(let i = 0; i < 4; i++) {
                animatedWeather[i].current.classList.remove(Animation)
            }
        },500)
    });

    function getFullDate(number) {
        let date = new Date();
        let day = date.getDay() + number;
        if (day > 6) day = day - 7;
        date.setDate((new Date().getDate() + number));
        return date.getDate().toString() + " "
            + month[(date.getMonth())] + " "
            + date.getFullYear().toString() + ", "
            + weekday[day];
    }

    const items = [];

    for (let i = 1; i < 5; i++) {
        items.push(
            <Container>
                <div ref={animatedWeather[i-1]}>
                    <Dates>{getFullDate(i)}</Dates>
                    <div className={Desc}>
                        <Icon
                            icon={weather.icons[i]}
                            size={100}
                            color={'#fff'}/>
                    </div>
                    <Temp>{weather.temp_max[i]} &deg;C</Temp>
                </div>
            </Container>)
    }
    return (
        <div>
            {items}
        </div>
    )
};

export default FutureWeather