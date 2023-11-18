import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;

  @media screen and (max-width: 959.9px) {
    display: flex;
  }
`

export const MainContainer = styled.main`
  width: 100%;
  height: calc(100vh - 86.4px);
  overflow-y: scroll;

  @media screen and (max-width: 959.9px) {
    display: inline-block;
  }
`
export const Title = styled.h2`
  font-weight: 600;
  padding: 4px 0 4px 24px;

  @media screen and (min-width: 959.9px) {
    padding-left: 30px;
  }
`

export const TitleAdd = styled.h2`
  font-weight: 600;
  padding: 8px 0 8px 0;
`

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: 600;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #2f3640;
  margin-right: 16px;
`

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
