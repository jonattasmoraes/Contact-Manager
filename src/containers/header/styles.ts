import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 18px;
  display: flex;
  background-color: #1a202c;
  box-shadow: 0 0 30px 3px;
  justify-content: space-between;
  align-items: center;
  height: 86.4px;

  @media screen and (min-width: 960px) {
    background-color: #010409;
  }
`
export const TitleContainer = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TitleIcon = styled.div`
  padding-left: 8px;
  font-size: 38px;
  color: #fff;
  background-color: none;
  border: none;

  @media screen and (min-width: 960px) {
    padding-left: 0;
  }
`

export const Title = styled.h1`
  padding-left: 8px;
  padding-bottom: 6px;
  color: #f0f6fc;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 600;
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
