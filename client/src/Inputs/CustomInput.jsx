import React from 'react';
import classes from './CustomInput.module.css'

const CustomInput = (props) => {

    const f = (event) => {
        props.onChange(event.target.value)
    }
     
    return ( 
        <input onChange={f} placeholder={props.placeholder} className={classes.CustomInput}/>
     );
}
 
export default CustomInput;