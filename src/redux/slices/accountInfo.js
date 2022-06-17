import { createSlice } from '@reduxjs/toolkit'

const accountInfoSlice = createSlice({
  name: 'accountInfo',
  initialState: {
    email: '',
    name: '',
    phone: null
  },
  reducers: {
    saveAccount: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
      state.phone = action.payload.phone
    },
    resetAccount: (state) => {
      state.email = ''
      state.name = ''
      state.phone = null
    }
  }
})

export const { saveAccount, resetAccount } = accountInfoSlice.actions
export default accountInfoSlice.reducer
