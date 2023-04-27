import React from 'react';
import { useState } from 'react';
import CustomButton from '../Inputs/CustomButton';
import CustomInput from '../Inputs/CustomInput';
import classes from './AddTest.module.css'
import axios from 'axios';
import { useEffect } from 'react';

const AddTest = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    

    const postTest = () => {
        // axios.post('https://localhost:7232/Tests/AddTest', name ,description)
        axios.post(
            'https://localhost:7232/Tests/AddTest', {name:name, description : description}, {withCredentials: true}
           )
    }

    return ( 
        <div className={classes.Background}>
            <div className={classes.Text}>Название теста</div>
            <CustomInput onChange={setName}>{name}</CustomInput>
            <div className={classes.Text}>Описание теста</div>
            <CustomInput onChange={setDescription}>{description}</CustomInput>
            <CustomButton onClick={postTest}>Добавить</CustomButton>
        </div>
     );
}
 
export default AddTest;