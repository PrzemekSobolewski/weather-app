import React, {useState} from 'react'
import {connect, useDispatch} from 'react-redux'
import * as actions from "../redux/actions/weatherAction";

const Region = (props) =>   {
    const [city, setCity] = useState(props.city);
    const dispatch = useDispatch();

    const handleChange = (event) =>  {
        setCity(event.target.value)
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(actions.updateCity(city));
    };

    return(
        <div>
            <form id={'regionForm'} method='POST'
                  onSubmit={handleSubmit} >
                <input className={"region"} value={city}  type={"text"} name={"city"} id={"city"} onChange={handleChange}/>
                <button type='submit' className='submitButton'>GET WEATHER</button>
            </form>
        </div>
    )

};

const mapStoreToProps = (store) => {
    return {
        city: store.city,
    }
};


export default connect(mapStoreToProps)(Region)