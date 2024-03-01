import React,{useEffect, useState} from 'react'

import { useSelector } from 'react-redux'

/**Custom Hook */
import { useFetchQuestion } from '../hooks/FetchQuestion'

export default function Questions() {
    
    const[checked,setChecked]=useState(undefined)
    const [{isLoading,apiData,serverError}]=useFetchQuestion()
    

    const questions= useSelector(state => state.questions.queue[state.questions.trace]);
    const trace= useSelector(state=>state.questions.trace)
    useEffect(() => {
       //console.log(questions)
    })

    function onSelect(){
        setChecked(true)
        // console.log('radio buton change')
    }
    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError|| "unknown Error"}</h3>

    
  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>
    <ul key={questions?.id}>
        {
            questions?.options.map((q,i)=>(
                <li key={i}>
                     <input
                        type='radio'
                        value={false}
                        name='options'
                        id={'q${i}-option'}
                        onChange={onSelect}
                    />
                    <label className='text-primary' htmlFor={'q${i}-option'}>{q}</label>
                    <div className='check'></div>
                </li> 


            ))
        }
        
        
        
        {/* */}
    </ul>
    
    
    </div>
  )
}

