import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const RedactTest = (props) => {

    const [test, setTest] = useState()
    const {state} = useLocation()

    async function getTest(id)
    {
        var res = await axios.get('https://localhost:7232/Tests/GetTest', {headers: {"id":id}})
        setTest(res.data)
        console.log(res.data)
    }
        
   useEffect(getTest(state.id), [])

    return ( 
        <div>
            <div>
                {test.name}
            </div>
        </div>
     );
}
 
export default RedactTest;