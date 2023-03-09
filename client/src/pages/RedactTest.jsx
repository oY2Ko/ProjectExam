import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import cl from './RedactTest.module.css'
import CustomInput from '../Inputs/CustomInput';
import CustomButton from '../Inputs/CustomButton';

const RedactTest = (props) => {

    const [test, setTest] = useState()
    const {state} = useLocation()
    const [text, setText] = useState()
    const [answer, setAnswer] = useState()
    const [mark, setMark] = useState()
    useEffect(() => {
        async function getTest() {
          var res = await axios.get('https://localhost:7232/Tests/GetTest', {headers: {"id":state.id}})
        setTest(res.data)
        }
        getTest();
      }, []);

      const AddQuestion = () => {
        if(test.questions)
        {
            let tmp = test
            tmp.questions.push({text: text, answer: answer, mark: mark})
            setTest(tmp)
        }
        else
        {
            let tmp = test
            tmp.questions = Array()
            tmp.questions.push({text: text, answer: answer, mark: mark})
            setTest(tmp)
        }
      }

    return ( 
        test ? 
        <div className={cl.Background}>
            <div className={cl.Name}>
                {test.name}
            </div>
            <div className={cl.Section}>
                {test.description}
            </div>
            <div className={cl.Block}>
                <div className={cl.AddTestPanel}>
                    <div>Текст вопроса</div>
                    <CustomInput onChange={setText}></CustomInput>
                    <div>Ответ</div>
                    <CustomInput onChange={setAnswer}></CustomInput>
                    <div>Колличество баллов</div>
                    <CustomInput onChange={setMark}></CustomInput>
                    <CustomButton onClick={AddQuestion}>Добавить вопрос</CustomButton>
                </div>
                <div className={cl.Section}>
                    {test.questions ? test.questions.map((val, i) => 
                        <div key={i}>
                            <div>
                                val.text
                            </div>
                            <div>
                                val.answer
                            </div>
                            <div>
                                val.mark
                            </div>
                        </div>
                            ) : "Вопросов нет"}
                </div>    


            </div>
        </div>
        :
        <div> Loading ... </div>
     );
}
 
export default RedactTest;