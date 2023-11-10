import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export const Container = styled.div`
  padding-top: 18px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 224px 1fr;
  background-color: #0d1117;
  box-shadow: 0 0 20px 3px red;
`

export default GlobalStyle
