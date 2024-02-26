import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css'

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }

    

  return (
        <div className='CurrencyBox'>Currency:
        {
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option className='CurrencyOption' value="£">£ Pound</option>
        <option className='CurrencyOption' value="$">$ Dollar</option>
        <option className='CurrencyOption' value="€">€ Euro</option>
        <option className='CurrencyOption' value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default Location;