import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const Test = (props) => {

    const [test, setTest] = useState()
    const {state} = useLocation()

    async function getTest(id)
    {
        var res = await axios.get('https://localhost:7232/Tests/GetTest', {headers:{'Content-Type':' application/json'}, data: {id: id}});
        // var res = await axios.get('https://localhost:7232/Tests/GetTest',
        // {headers: {
        //     'Content-Type': 'application/json; charset=utf-8',
        //     'Accept': 'text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8'
        //   }}          
        //   )
        console.log(res)

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
 
export default Test;