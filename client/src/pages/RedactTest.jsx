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

      const AddQuestion = async () => {
        if(test.questions)
        {
            let tmp = test
            tmp.questions.push({text: text, answer: answer, mark: mark})
            setTest(tmp)
            await axios.post('https://localhost:7232/Tests/UpdateTest', test)
            window.location.reload()

        }
        else
        {
            let tmp = test
            tmp.questions = Array()
            tmp.questions.push({text: text, answer: answer, mark: mark})
            setTest(tmp)
            await axios.post('https://localhost:7232/Tests/UpdateTest', test)
            window.location.reload()
        }
      }


    return ( 
        test ? 
        <div className={cl.Background}>
            <div className={cl.Name}>
                {test.name}
            </div>
            <div className={cl.Description}>
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
                        <div className={cl.Question} key={i}>
                            <div className={cl.Subsection}>
                                <div className={cl.QuestionData}>
                                <div>
                                    Вопрос {i + 1} :<div className={cl.DefaultText}> {val.text}</div>
                                </div>
                                    <div>
                                        Ответ: <div className={cl.DefaultText}>{val.answer}</div>
                                    </div>
                                    <div>
                                    Баллов за правильный ответ: <div className={cl.DefaultText}>{val.mark}</div>
                                    </div>
                                </div>
                                <CustomButton onClick={() =>{
                                    axios.delete('https://localhost:7232/Tests/DeleteQuestion', {headers: {"id":val.id}})
                                    window.location.reload()   
                                }
                                }
                                    className={cl.Xmark}>&#10006;
                                    </CustomButton>
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