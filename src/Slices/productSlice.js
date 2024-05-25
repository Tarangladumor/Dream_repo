import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  product : null,
  editProduct : false,
}

const productSlice = createSlice({
  name:"product",
  initialState,
  reducers: {
    setProduct: (state,action) => {
      state.step = action.payload
    },
    setEditProduct: (state,action) => {
      state.step = action.payload
    }
  }
})

export const { setEditProduct, setProduct} = productSlice.actions
export default productSlice.reducer