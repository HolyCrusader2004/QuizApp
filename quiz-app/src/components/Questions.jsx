import QuestionTimer from "./QuestionTImer"
import Answers from "./Answers"
import { useState } from "react"
import QUESTIONS from '../questions.js';

export default function Questions({questionIndex, onSelectAnswer, onSkip}){

    const [answer,setAnswer] = useState({
        selectedAnswer:'',
        correct: null
    })

    let timer = 10000;

    if(answer.selectedAnswer){
        timer = 1000;
    }

    if(answer.correct !== null){
        timer = 2000;
    }

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer: answer,
            correct: null
        })
        setTimeout(()=>{
            setAnswer({
                selectedAnswer: answer,
                correct: QUESTIONS[questionIndex].answers[0] === answer
            })

            setTimeout(() =>{
                onSelectAnswer(answer)
            },2000)
        },1000)
    }
    let answerState='';
    if(answer.selectedAnswer && answer.correct !== null){
        answerState = answer.correct ? 'correct':'wrong';
    }else if(answer.selectedAnswer){
        answerState = 'answered'
    }

    return <div id="question">
    <QuestionTimer key={timer}
    time={timer} 
    onTimeout={answer.selectedAnswer ==='' ? onSkip: null}
    mode={answerState}
    />
    <h2>{QUESTIONS[questionIndex].text}</h2>
    <Answers
    answers={QUESTIONS[questionIndex].answers}
    selectedAnswer={answer.selectedAnswer} 
    onSelect={handleSelectAnswer} 
    answerState={answerState}/>
</div>
}