import { useCallback, useState } from "react"
import QUESTIONS from '../questions.js'
import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";


export default function Quiz(){
    const [answers, setAnswers] = useState([])
    const currQuestionIndex = answers.length;
    const quizComplete = currQuestionIndex === QUESTIONS.length;


const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setAnswers((prevAnswer) => {
            return [...prevAnswer, selectedAnswer]}  );
    }, [])

    const handleSkipAnswer = useCallback(() => {handleSelectAnswer(null)}, [handleSelectAnswer])
    
    if(quizComplete){
       return <Summary userAnswers={answers}/>
    }
    return( 
    <div id="quiz">
        <Questions key={currQuestionIndex}
        questionIndex={currQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkip = {handleSkipAnswer}/>
    </div>);
}