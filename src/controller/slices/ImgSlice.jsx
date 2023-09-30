import { createSlice } from "@reduxjs/toolkit";

const imgSlice = createSlice({
   initialState:'',
   name:'imgSlice',
   reducers: {
      show: (state , action)=> {
         return state = action.payload;
      },
      hide: (state)=> {
         return state = '';
      },
   }
})

export default imgSlice.reducer;
export const {show , hide} = imgSlice.actions;