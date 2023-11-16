import { LuSearch } from 'react-icons/lu'

import { Input, InputLabel, InputContainer } from './styles'

import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const InputApp: React.FC = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <InputContainer>
      <InputLabel htmlFor="search">
        <LuSearch />
      </InputLabel>
      <Input
        type="text"
        placeholder="Search..."
        maxLength={25}
        value={term}
        onChange={(event) => dispatch(changeTerm(event.target.value))}
      />
    </InputContainer>
  )
}

export default InputApp
