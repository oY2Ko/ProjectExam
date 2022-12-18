import React from 'react';
import classes from './TestFrame.module.css'
import {useNavigate} from 'react-router-dom'

const TestFrame = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Test", {id: 1});
    }
    return ( 
        <div className={classes.TestFrame}>
            <h4>{props.key}Название теста:</h4>
            <h5 className={classes.DefaultText}>{props.Title}</h5>
        </div>
     );
}
 
export default TestFrame;