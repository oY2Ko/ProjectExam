import React from 'react';
import classes from './CustomInput.module.css'

const CustomInput = (props) => {
    return ( 
        <input placeholder={props.placeholder} className={classes.CustomInput}/>
     );
}
 
export default CustomInput;