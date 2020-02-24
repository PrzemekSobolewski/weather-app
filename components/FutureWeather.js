import React from 'react';
import {css} from 'emotion';
import styled from '@emotion/styled';
import Icon from './Icon';
import {useSelector} from "react-redux";


const Container = styled.div`
    background: #672494;
    color: white;
    height: calc(25% - 1px);
    width: 20em;
    border-bottom: 1px solid;
`;
const Temp = styled.span`
    padding: 2.2em 0em 1em 1em;
    font-size: 1.6em;
    display: grid;
    text-align: center;
    float: left;
    width: 40%;
`;

const Dates = styled.div`
    padding-top: 1em;
    text-align: center;
    font-size: 1.2em;
    font-weight: 700;
`;

const Desc = css({
    paddingTop: '1em',
    float: 'right',
    width: '40%',
    fontWeight: '700',
    marginRight: '1em'
});


const FutureWeather = () => {
    const weather = useSelector(state => state.myWeather);
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November, December"];

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
                <Dates>{getFullDate(i)}</Dates>
                <div className={Desc}>
                    <Icon
                        icon={weather.icons[i]}
                        size={100}
                        color={'#fff'}/>
                </div>
                <Temp>{weather.temp_max[i]} &deg;C</Temp>
         </Container>)
    }

    return (
        <div>
            {items}
        </div>
    )
};

export default FutureWeather