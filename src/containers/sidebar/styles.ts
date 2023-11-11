import styled from 'styled-components'

export const Aside = styled.aside`
  width: 300px;
  height: calc(100vh - 86.8px);
  background-color: #0d1117;
  box-shadow: 0 0 4px 1px;

  @media screen and (max-width: 959.9px) {
    display: none;
  }
`

export const Filters = styled.div`
  margin-bottom: 48px;
`
