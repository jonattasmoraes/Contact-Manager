import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 18px;
  display: flex;
  background-color: #1a202c;
  box-shadow: 0 0 30px 3px;
  justify-content: space-between;
  align-items: center;
  height: 86.4px;
`
export const ButtonIcon = styled.button`
  font-size: 28px;
  border: none;
  color: #fff;
  background-color: #1a202c;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    display: none;
  }
`
