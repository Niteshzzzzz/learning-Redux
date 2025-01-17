import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import productsReducer from './reducers/ProductReducer'

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    productsReducer: productsReducer,
  },
})