import React from 'react'
import { FaBars } from 'react-icons/fa'
import { IoMdContact } from 'react-icons/io'
import { ButtonIcon, HeaderContainer } from './styles'
import {
  Title,
  TitleContainer,
  TitleIcon
} from '../../containers/header/styles'
import InputApp from '../../components/Input/index'

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
      <Title>Contact Manager</Title>
    </TitleContainer>
    <InputApp />
  </HeaderContainer>
)

export default Header
