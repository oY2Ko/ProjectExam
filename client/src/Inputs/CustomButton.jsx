import React from 'react';
import classes from './CustomButton.module.css'

const CustomButton = (props) => {
    const rootclasses = [classes.custombtn, classes.btn3];
    return ( 
        
        <button onClick={props.onClick} className={rootclasses.join(' ')}>
            
            <span>{props.children}</span></button>
     );
}
 
export default CustomButton;