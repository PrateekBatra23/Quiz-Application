import React, { useEffect } from 'react';
import "../styles/main.css";
import Questions from './Questions';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';

/**redux store import */
import { useSelector,useDispatch  } from 'react-redux';


export default function Quiz() {

    const {queue,trace}= useSelector(state => state.questions);
    const dispatch =useDispatch()
    useEffect(() => {
        console.log(trace)
    })

    /** prev button event handler */
    function onPrev(){
        console.log('On prev click')
        if(trace>0){
            ///update the trace value by one using MovePrevAction
            dispatch(MovePrevQuestion())}}
    
    
        /**next button event handler */
    function onNext(){
        console.log('On next click')
        if(trace < queue.length)
            ///update the trace value by one using MovenextAction
            dispatch(MoveNextQuestion())
        
        
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