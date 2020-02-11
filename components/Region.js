import React from 'react'

const Region = () => {
    return(
        <div>
            <form id={'regionForm'} >
                <input className={"region"} placeholder={"City"} type={"text"} name={"city"} id={"city"}/>
                <input className={"region"} placeholder={"Country"} type={"text"} name={"country"} id={"country"}/>
            </form>
        </div>
    )
};

export default Region