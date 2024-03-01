import { useEffect, useState } from "react"
import data from "../database/data";
import { useDispatch } from "react-redux";

/**redux actions */
import * as Action from '../redux/question_reducer'


/**fetch question hook to fetch api  data and set value to store */
export const useFetchQuestion=() =>{
    const dispatch=useDispatch();
    const[getdata,setgetdata] = useState({isLoading:false,apiData:[],serverError: null})
    
    useEffect(()=>{
        setgetdata(prev =>({...prev, isLoading:true}));
        /**async function fetch backnd data */
        (async ()=>{
            try {
                let question = await data;
                if(question.length >0){
                    setgetdata(prev =>({...prev,isLoading:false}));
                    setgetdata(prev =>({...prev,apiData:question}));

                    /**dispatch an action*/
                    dispatch(Action.startExamAction(question))}
                else{
                    throw new Error("No Question availible");
                }  
                }
            catch (error) {
                setgetdata(prev =>({...prev,isLoading:false}))
                setgetdata(prev =>({...prev,isLoading:error}))
            }

        })();
    },[dispatch]);

    return [getdata,setgetdata];
}
/**moveaction dispatch function */
export const MoveNextQuestion=()=>async(dispatch)=> {
    try {
        dispatch(Action.moveNextAction())
    } catch (error) {
        console.log(error)
    }
}
/**prev action dispatch function */
export const MovePrevQuestion=()=> async (dispatch)=> {
    try {
        dispatch(Action.movePrevAction())
    } catch (error) {
        console.log(error)
    }
}