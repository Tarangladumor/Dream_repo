<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  product : null,
  editProduct : false,
=======
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product:null,
  editProduct:false,
>>>>>>> 98adbd349577228dd3d81b5912bbff5dd72c0642
}

const productSlice = createSlice({
  name:"product",
  initialState,
  reducers: {
    setProduct: (state,action) => {
<<<<<<< HEAD
      state.step = action.payload
    },
    setEditProduct: (state,action) => {
      state.step = action.payload
    }
  }
})

export const { setEditProduct, setProduct} = productSlice.actions
=======
      state.product = action.payload
    },
    setEditProduct: (state,action) => {
      state.editProduct = action.payload
    },
    resetProductState: (state) => {
      state.product = null
      state.editProduct = null
    },
  },
})

export const {setProduct,setEditProduct,resetProductState} = productSlice.actions

>>>>>>> 98adbd349577228dd3d81b5912bbff5dd72c0642
export default productSlice.reducer