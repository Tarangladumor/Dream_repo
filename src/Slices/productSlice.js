import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step: 3,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      setStep: (state, action) => {
        state.step = action.payload
      }
      
    }
})

export const {
    setStep, 
} = productSlice.actions
  
export default productSlice.reducer