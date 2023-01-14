import React from "react";
import { useState } from "react";
import './Questionnaire.css'
import image from '../../imgs/done.png'


function Questionnaire() {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0)

  let questions = [
    {
      title: "React - это ...?",
      answers: ["Библиотека", "Фреймворк", "Приложение"],
      correct: "Библиотека",
    },
    {
      title: "2 + 2",
      answers: [31, 4, 1],
      correct: 4,
    },
    {
      title: "Java = JS?",
      answers: ["да", "нет", "где я?"],
      correct: "нет",
    },
  ];

  function Variants(){
    return(
      <div>
        {step !== questions.length && (
        <div className="variantsContainer">
          <h2 className="questionTitle">{questions[step].title}</h2>
          {questions[step].answers.map((el, index)=><button className="questionVariant" key={index} onClick={()=>{
            if(el === questions[step].correct) setCounter(counter+1)
            setStep(step + 1)}}>{el}</button>)
          }
        </div>
      )}
      </div>
      
    )
  }


  return (
    <div className="questionnaireContainer">
      <Variants />

      {step === questions.length && (
        <div className="result">
          <img className='result__img' src={image} alt='done'></img>
          <h2>
            Вы ответил на {counter} вопросов из {questions.length}
          </h2>
          <button className="tryAgainBtn" onClick={()=>{setStep(0); setCounter(0)}}>Попробовать ещё раз</button>
        </div>
      )}
    </div>
  );
}

export default Questionnaire;
