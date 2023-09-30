import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   initialState: [],
   name: 'cartSlice',
   reducers: {
      addToCart: (state, action) => {
         const findProduct = state.find((product) => product.id === action.payload.id)
         if (findProduct) {
            findProduct.qty += 1;
            let cartList = JSON.parse(localStorage.getItem('cart'));
            cartList = cartList.filter(prod => {
               return (prod.id === findProduct.id) ? prod.qty++ : prod;
            })
            localStorage.setItem('cart', JSON.stringify(cartList));
         }
         else {
            // action.payload.qty = 1;
            localStorage.setItem('cart', JSON.stringify([...state, action.payload]));
            return [...state, action.payload]
         }
      },
      deleteFromCrat: (state, action) => {
         return state = state.filter((product) => product.id !== action.payload.id);
      },
      decreaseQty: (state, action) => {
         const findProduct = state.find((product) => product.id === action.payload.id);
         if (findProduct.qty === 1) {
            // action.dispatch(deleteFromCrat(state, findProduct))
            state = state.filter((product) => product.id !== findProduct.id);
         }
         else
            findProduct.qty -= 1;
         // if (findProduct.qty > 0) {
         // }
         return state;
      },
   }
})
export default cartSlice.reducer;
export const { addToCart, deleteFromCrat, decreaseQty, } = cartSlice.actions;