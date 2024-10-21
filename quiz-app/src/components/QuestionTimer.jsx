import { useEffect, useState } from "react";

export default function QuestionTimer({time, onTimeout, mode}){
    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        const timer = setTimeout(()=>{
            if (typeof onTimeout === 'function') {
                onTimeout();
            } else {
                console.error("onTimeout is not a function");
            }
        }, time);
        return () => {clearTimeout(timer)}
    }, [time, onTimeout])
   
    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100)
        return () => {clearInterval(interval)}
    },[])

    return <progress id="question-time" max={time} value={remainingTime} className={mode}></progress>
}