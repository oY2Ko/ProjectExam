import React from 'react';
import classes from './LogIn.module.css'

const LogIn = () => {
    return ( 
        <div>
            <div className={classes.LogInFrame}>
                <input/>
                <input type={"password"}/>
                <button>Войти</button>
            </div>
        </div>
     );
}
 
export default LogIn;