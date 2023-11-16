import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contact'

type FilterState = {
  term: string
  critery: 'type' | 'status' | 'phoneType' | 'all'
  value?: enums.Type | enums.Status | enums.PhoneType
}

const initialState: FilterState = {
  term: '',
  critery: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { changeTerm } = filterSlice.actions

export default filterSlice.reducer
