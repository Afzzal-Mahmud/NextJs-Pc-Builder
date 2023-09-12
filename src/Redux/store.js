import { configureStore } from '@reduxjs/toolkit'
import buildPcReducer from './buildPcSlice'
export const store = configureStore({
  reducer: {
    pcComponents : buildPcReducer
  },
})