import React from 'react';
import TestFrame from '../Components/TestFrame';
import classes from './Tests.module.css'
import axios from 'axios';

const Tests = (props) => {
    const tests = Array(<TestFrame Title='1. Тест 1' Description='Описание теста 1' Mark='5'/>, <TestFrame Title='2. Тест 2' Description='Описание теста 2'Mark='5'/>,
    <TestFrame Title='3. Тест 3' Description='Описание теста 3' Mark='5'/>, <TestFrame Title='4. Тест 4' Description='Описание теста 4' Mark='5'/>,
    <TestFrame Title='5. Тест 5' Description='Описание теста 5' Mark='5'/>);
    return ( 
        <div >
            <div className={classes.Topic}>Список тестов</div>
            <hr className={classes.Hr}/>
            <div className={classes.TestsFrame}>
                {tests.map((value, i) => <div className={classes.Container} key={i}><input className={classes.CheckBox} type="checkbox"/>{value}</div>)}
            </div>
        </div>
     );
}
 
export default Tests;