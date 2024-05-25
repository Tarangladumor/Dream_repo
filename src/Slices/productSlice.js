// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     step: 1,
//     page1Data:null,
//     page2Data: null,
//     editProduct: false,
//     result : []
// }



// const productSlice = createSlice({
//     name: "product",
//     initialState,
//     reducers: {
//       setStep: (state, action) => {
//         state.step = action.payload;
//       },
//       setPage1Data: (state,action) => {
//         state.page1Data = action.payload;
//       },
//       setPage2Data: (state,action) => {
//         state.page2Data = action.payload;
//         console.log(state.page2Data);
//       },
//       addProduct: (state, action) => {
//         state.page3Data = action.payload;
//       },
//       setEditProduct: (state,action) => {
//         state.editProduct = action.payload;
//       },
//       // resetProductState: (state) => {
//       //   state.step = 1
//       //   state.page1Data = null
//       //   state.page2Data = null
//       //   state.editProduct = false
//       // }
//     }
// })

// export const {
//     setStep, setPage1Data,setPage2Data,setEditProduct,resetProductState
// } = productSlice.actions
  
// export default productSlice.reducer




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  page1Data: null,
  page2Data: null,
  page3Data: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setPage1Data: (state, action) => {
      state.page1Data = action.payload;
    },
    setPage2Data: (state, action) => {
      state.page2Data = action.payload;
    },
    addProduct: (state, action) => {
      state.page3Data = action.payload;
    },
  },
});

export const { setStep, setPage1Data, setPage2Data, addProduct } = productSlice.actions;

export default productSlice.reducer;
