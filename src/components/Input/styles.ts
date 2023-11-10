import styled from 'styled-components'

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
  background-color: #1a202c;
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

export const InputContainer = styled.div`
  position: relative;
`

export const Input = styled.input`
  height: 28px;
  width: 450px;
  background-color: #c2c2c2;
  font-family: roboto, sans-serif;
  border-radius: 8px;
  border: 2px solid #c2c2c2;
  outline: none;
  padding: 20px 8px 18px 40px;
  transition: 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    border: 2px solid #673dff;

    &::placeholder {
      color: #101010;
      transition: 450ms ease-in-out;
    }
  }

  &::placeholder {
    font-family: roboto, sans-serif;
    color: #696969;
  }

  &:focus {
    border: 2px solid #673dff;

    &::placeholder {
      color: #101010;
    }
  }

  @media (max-width: 781px) {
    max-width: 300px;
  }
`

export const Label = styled.label`
  position: absolute;
  top: -5px;
  left: 5px;
  padding-top: 8px;
  background-color: none;
  font-size: 28px;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`
