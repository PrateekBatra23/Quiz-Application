import React, { useEffect } from 'react'
import "../styles/main.css"
import Questions from './Questions';

/**redux store import */
import {useSelector} from 'react-redux'
 
export default function Quiz() {

    const {questions}=useSelector(state=> state)
    useEffect(()=>{
        console.log(questions.queue)
    })

    /** prev button event handler */
    function onPrev(){
        console.log('On prev click')
    }
    /**next button event handler */
    function onNext(){
        console.log('On next click')
    }





    return (
        <div className='container'>
            <h1 className='title text-light'> Quiz Application</h1>
            <Questions></Questions>
            <div className='grid'>
                <button className='btn prev' onClick={onPrev}>Previous</button>
                <button className='btn next' onClick={onNext}>Next</button>

            </div>
            
            
        </div>
    );
}