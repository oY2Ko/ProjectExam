import React, { useState } from 'react';
import classes from './LogIn.module.css'
import CustomInput from '../Inputs/CustomInput';
import CustomButton from '../Inputs/CustomButton';
import axios from 'axios'

const LogIn = () => {
const [login, setLogin] = useState()
const [password, setPassword] = useState()

    const LogIn = async () => {
        var res = await axios.post('https://localhost:7232/Account/LogIn', {LogIn: login, Password: password})
        console.log(res)
    }


    return ( 
        <div className={classes.Background}>
            <div className={classes.LogInFrame}>
                <div className={classes.Topic}>Вход</div>
                <CustomInput onChange={setLogin} placeholder='Логин'/>
                <CustomInput onChange={setPassword} type={"password"} placeholder='Пароль'/>
                <CustomButton onClick={LogIn}>Войти</CustomButton>
            </div>
        </div>
     );
}
 
export default LogIn;