import React from 'react'
import '../styles/result.css'
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import { useDispatch } from 'react-redux';
/**import actions */
import { resetResultAction } from '../redux/result_reducer';
import { resetAllAction } from '../redux/question_reducer';

export default function Result() {
    const dispatch=useDispatch()
    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }


    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            <div className='result flex-center'>
                <div className='flex'>
                    <span>Total Quiz Points</span>
                    <span className='bold'>50 </span>
                </div>

                <div className='flex'>
                    <span>Total Questions</span>
                    <span className='bold'>05 </span>
                </div>

                <div className='flex'>
                    <span>Total Attempts</span>
                    <span className='bold'>03 </span>
                </div>
                <div className='flex'>
                    <span>Total Earn Points</span>
                    <span className='bold'>30 </span>
                </div>
                <div className='flex'>
                    <span>Quiz Results</span>
                    <span className='bold'>30 </span>
                </div>

            </div>

            <div className='start'>
                <Link className='btn' to={'/'} onClick={onRestart} >Restart</Link>



            </div>
            <div className='container'>
                <ResultTable></ResultTable>
            </div>


        </div>
    );
}