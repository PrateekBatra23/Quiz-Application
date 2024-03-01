import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
    name:'result',
    initialState:{
        userId: null,
        result: []
    },
    reducers:{
        setUserid:(state,action)=>{
            state.userId = action.payload
        }
    }
})

export const{userId}=resultReducer.actions;

export default resultReducer.reducer;