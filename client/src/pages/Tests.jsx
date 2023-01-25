import React, { useState, useEffect, useRef } from 'react';
import TestFrame from '../Components/TestFrame';
import classes from './Tests.module.css'
import axios from 'axios';
import CustomButton from '../Inputs/CustomButton'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

const Tests = (props) => {
    // const tests = Array(<TestFrame Title='1. Тест 1' Description='Описание теста 1' Mark='5'/>, <TestFrame Title='2. Тест 2' Description='Описание теста 2'Mark='5'/>,
    // <TestFrame Title='3. Тест 3' Description='Описание теста 3' Mark='5'/>, <TestFrame Title='4. Тест 4' Description='Описание теста 4' Mark='5'/>,
    // <TestFrame Title='5. Тест 5' Description='Описание теста 5' Mark='5'/>);
    // const {data} = await axios.get("https://localhost:7232/Tests/tests")
    const [tests, SetTests] = useState([])

    const getTests = async () => {
        const res  = await axios.get("https://localhost:7232/Tests/tests");
        SetTests(res.data)
        };

        const ref = useRef(null);
        const checkbox = ref.current
        var checked = false
        console.log(checkbox)
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checked = true
                axios.post("https://localhost:7232/Tests/IsActive", checked, test.id)
            } else {
                checked = false
                axios.post("https://localhost:7232/Tests/IsActive", checked, test.id)
            }
            });
        
        useEffect(() => {
        getTests();
        }, [checked]);

    return ( 
        <div className={classes.Background}>
            <div className={classes.Topic}>Список тестов</div>
            <hr className={classes.Hr}/>
            <CustomButton>Добавить</CustomButton>
            <div className={classes.TestsFrame}>
            {console.log(tests)}
            {tests.map((test, i) =>
                <div className={classes.Container} key={i}>
                    <input ref={ref} checked={test.isActive} className={classes.CheckBox} type="checkbox"/>
                    <TestFrame Id={test.id} Title={test.name} Description={test.description} Mark={test.mark}/>
                </div>)}
            </div>
        </div>
     );
}
 
export default Tests;