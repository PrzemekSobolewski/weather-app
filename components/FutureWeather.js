import React from 'react'
import {css} from 'emotion'
import styled from '@emotion/styled'


const Container = styled.div`
    background: #672494;
    color: white;
    display: grid;
    height: calc(25% - 1px);
    width: 20em;
    border-bottom: 1px solid;
`;
const Temperatures = styled.div`
    display: block;
`;

const Dates = styled.div`
    text-align: center;
    font-size: 1em;
    font-weight: 700;
    margin-top: 1em;
`;

const Desc = css({
    textAlign: 'right',
    fontWeight: '700',
    marginRight: '1em'
});


const FutureWeather = (props) => {
    const date = new Date();
    const weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November, December"];
    function getFullDate(number) {
        let day = date.getDay() + number;
        if(day > 6) day = day - 7;
        date.setDate((new Date().getDate() + number));
        return date.getDate().toString() + " "
            + month[(date.getMonth())] + " "
            + date.getFullYear().toString() + " "
            + weekday[day];
    }

    return(
        <div>
            <Container>
                <Dates>{getFullDate(1)}</Dates>
                <span className={Desc}>{props.desc[1]}</span>
                <Temperatures>
                    <span>{props.temp_min[1]}</span>
                    <span>{props.temp_max[1]}</span>
                </Temperatures>
            </Container>
            <Container>
                <Dates>{getFullDate(2)}</Dates>
                <span className={Desc}>{props.desc[2]}</span>
                <Temperatures>
                    <span>{props.temp_min[2]}</span>
                    <span>{props.temp_max[2]}</span>
                </Temperatures>
            </Container>
            <Container>
                <Dates>{getFullDate(3)}</Dates>
                <span className={Desc}>{props.desc[3]}</span>
                <Temperatures>
                    <span>{props.temp_min[3]}</span>
                    <span>{props.temp_max[3]}</span>
                </Temperatures>
            </Container>
            <Container>
                <Dates>{getFullDate(4)}</Dates>
                <span className={Desc}>{props.desc[4]}</span>
                <Temperatures>
                    <span>{props.temp_min[4]}</span>
                    <span>{props.temp_max[4]}</span>
                </Temperatures>
            </Container>
        </div>
    )
};

export default FutureWeather