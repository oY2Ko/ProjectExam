import React from 'react';
import classes from './CustomButton.module.css'
import axios from 'axios';

const CustomButton = (props) => {
    return ( 
        <button className={classes.CustomButton}>
            {props.children}
        </button>
     );
}
 
export default CustomButton;