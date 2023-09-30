import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import ImgSlice from './slices/ImgSlice';
export const store = configureStore({
   reducer: {
      cart: cartSlice,
      imgModel: ImgSlice
      // other reducers...
   },

})