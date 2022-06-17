import { createSlice } from '@reduxjs/toolkit'

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    totalPage: 0,
    limit: 10
  },
  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    changeTotalPage: (state, action) => {
      state.totalPage = action.payload
    },
    changeLimit: (state, action) => {
      state.limit = action.payload
    },
    resetPagination: (state) => {
      state.currentPage = 1
      state.totalPage = 0
      state.limit = 10
    }
  }
})

export const {
  changeCurrentPage,
  changeTotalPage,
  changeLimit,
  resetPagination
} = paginationSlice.actions
export default paginationSlice.reducer
