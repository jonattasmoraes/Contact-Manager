import { LuSearch } from 'react-icons/lu'
import { RiContactsBook2Fill } from 'react-icons/ri'

import {
  Input,
  Label,
  Title,
  TitleIcon,
  InputContainer,
  TitleContainer
} from './styles'
import { HeaderContainer } from '../../containers/header/styles'

const Header = () => (
  <HeaderContainer>
    <TitleContainer>
      <TitleIcon>
        <RiContactsBook2Fill />
      </TitleIcon>
      <Title>Contacts</Title>
    </TitleContainer>
    <InputContainer>
      <Label htmlFor="search">
        <LuSearch />
      </Label>
      <Input type="text" placeholder="Search..." id="search" maxLength={38} />
    </InputContainer>
  </HeaderContainer>
)

export default Header
