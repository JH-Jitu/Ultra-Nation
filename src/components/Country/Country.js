import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, currencies, flag} = props.country;
    // console.log(props);
    const handleAddCountry = props.handleAddCountry;
    return (
        <div align="center">
                <li><div className= "country" >
                     <div className="flag">
                    <img src={flag} alt=""/>
                    </div>
                    <div className="details">                        
                    <p><b> Country Name:------------ </b> {name}</p>
                    <p><b>Capital Name: </b> {capital}</p>
                    <p><b>currencies Name: </b> {currencies[0].code}</p>
                    <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
                    </div>
                   
                    </div>
                </li> <br/>
        </div>
    );
};

export default Country;