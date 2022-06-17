import { configureStore } from '@reduxjs/toolkit'
import pagination from './slices/pagination'
import accountInfo from './slices/accountInfo'

export const store = configureStore({
  reducer: { pagination, accountInfo }
})
