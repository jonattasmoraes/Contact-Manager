import { FaBars } from 'react-icons/fa'
import { IoMdContact } from 'react-icons/io'
import { ButtonIcon, HeaderContainer } from './styles'
import {
  Input,
  InputContainer,
  Label,
  Title,
  TitleContainer,
  TitleIcon
} from '../../components/Input/styles'
import { LuSearch } from 'react-icons/lu'

interface HeaderProps {
  handleSidebarToggle: () => void
}

const Header: React.FC<HeaderProps> = ({ handleSidebarToggle }) => (
  <HeaderContainer>
    <TitleContainer>
      <ButtonIcon onClick={handleSidebarToggle}>
        <FaBars />
      </ButtonIcon>
      <TitleIcon>
        <IoMdContact />
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
