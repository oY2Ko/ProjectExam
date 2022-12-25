import React from 'react';
import classes from './CustomButton.module.css'
import axios from 'axios';

const CustomButton = (props) => {
    const rootclasses = [classes.custombtn, classes.btn3];
    return ( 
        
        <button className={rootclasses.join(' ')}>
            
            <span>{props.children}</span></button>
     );
}
 
export default CustomButton;