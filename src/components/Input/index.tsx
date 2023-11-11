import { LuSearch } from 'react-icons/lu'

import { Input, InputLabel, InputContainer } from './styles'

const InputApp = () => (
  <InputContainer>
    <InputLabel htmlFor="search">
      <LuSearch />
    </InputLabel>
    <Input type="text" placeholder="Search..." id="search" maxLength={38} />
  </InputContainer>
)

export default InputApp
