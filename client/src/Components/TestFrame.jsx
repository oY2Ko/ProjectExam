import React from 'react';
import classes from './TestFrame.module.css'
import {Navigate, useNavigate} from 'react-router-dom'
import CustomButton from '../Inputs/CustomButton';

const TestFrame = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Test", {id: 1});
    }
    return ( 
        <details className={classes.TestFrame}>
            <summary>
                <div className={classes.Topic}>{props.Title}</div>
            </summary>
            <div className={classes.Description}>Описание</div>
            <div className={classes.DescriptionText}>{props.Description}</div>
            <CustomButton>Изменить</CustomButton>
        </details>
     );
}
 
export default TestFrame;