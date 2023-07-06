import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducer/User-Reducer.js'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})