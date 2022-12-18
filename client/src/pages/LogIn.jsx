import React from 'react';
import classes from './LogIn.module.css'
import CustomInput from '../Inputs/CustomInput';
import CustomButton from '../Inputs/CustomButton';

const LogIn = () => {
    return ( 
        <div className={classes.Background}>
            <div className={classes.LogInFrame}>
                <CustomInput placeholder='Логин'/>
                <CustomInput type={"password"} placeholder='Пароль'/>
                <CustomButton>Войти</CustomButton>
            </div>
        </div>
     );
}
 
export default LogIn;