import React from 'react';
import TestFrame from '../Components/TestFrame';
import classes from './Tests.module.css'

const Tests = (props) => {
    const tests = Array(<TestFrame Title='UGABUGA' Text='UGABUGAUGABUGAUGABUGAUGABUGA' Mark='5'/>, <TestFrame Title='OSAS'Text='OSASOSASOSASOSASOSASOSAS'Mark='5'/>);
    return ( 
        <div >
            {console.log(tests)}
            {tests.map((value, i) => <div key={i}>{value}</div>)}
        </div>
     );
}
 
export default Tests;