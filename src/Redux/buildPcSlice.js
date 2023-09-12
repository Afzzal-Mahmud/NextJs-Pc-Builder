import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  components: [],
}

export const buildPcSlice = createSlice({
  name: 'build_pc',
  initialState,
  reducers: {
    setAddPcComponents: (state,action) => {
      state.components.push(action.payload);
    },
    removePcComponents: (state,action) =>{
      state.components = state.components.filter((component) => component._id !== action.payload)
    },
    clearAndCheckout: (state) =>{
      state.components = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAddPcComponents,removePcComponents,clearAndCheckout } = buildPcSlice.actions

export default buildPcSlice.reducer