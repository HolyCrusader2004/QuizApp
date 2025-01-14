import quizComplete from '../assets/quiz-complete.png'
import QUESTIONS from '../questions.js'

export default function Summary({userAnswers}){

    const skippedAnswers = userAnswers.filter(answer => answer===null);
    const correctAnswers = userAnswers.filter((answer,index) => answer === QUESTIONS[index].answers[0])

    const skippedAnswerShare = Math.round((skippedAnswers.length / userAnswers.length)*100)
    const correctAnswerShare = Math.round((correctAnswers.length / userAnswers.length)*100)
    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;
    return <div id="summary"> 
        <img src={quizComplete} alt="quiz-complete"></img>
        <h2>Quiz completed</h2>
        <div id='summary-stats'>
            <p>
                <span className='number'>{skippedAnswerShare}</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>{correctAnswerShare}</span>
                <span className='text'>correctly answered</span>
            </p>
            <p>
                <span className='number'>{wrongAnswerShare}</span>
                <span className='text'>incorrectly answered</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer'

                if(answer === null){
                    cssClass += ' skipped'
                }else if(answer === QUESTIONS[index].answers[0]){
                    cssClass += ' correct'
                }else{
                    cssClass += ' wrong'
                }

                return (
                <li key={index}>
                    <h3>{index + 1}</h3>
                    <p className='question'>{QUESTIONS[index].text}</p>
                    <p className={cssClass}>{answer ?? 'skipped'}</p>
                </li>
                );
            })}
            
        </ol>
    </div>
}