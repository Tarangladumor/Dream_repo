import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step: 1,
    page1Data:null,
    page2Data: null,
    editProduct: false,
    result : []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      setStep: (state, value) => {
        state.step = value.payload
      },
      setPage1Data: (state,value) => {
        state.page1Data = value.payload
      },
      setPage2Data: (state,value) => {
        state.page2Data = value.payload
      },
      setEditProduct: (state,value) => {
        state.editProduct = value.payload
      },
      // resetProductState: (state) => {
      //   state.step = 1
      //   state.page1Data = null
      //   state.page2Data = null
      //   state.editProduct = false
      // }
    }
})

export const {
    setStep, setPage1Data,setPage2Data,setEditProduct,resetProductState
} = productSlice.actions
  
export default productSlice.reducer