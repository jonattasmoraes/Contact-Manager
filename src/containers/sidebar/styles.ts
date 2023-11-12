import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: #0d1117;
  box-shadow: 0 0 4px 1px;
  height: calc(100vh - 86.4px);
  padding: 16px;

  @media screen and (max-width: 959.9px) {
    display: none;
  }
`

export const Filters = styled.div`
  margin-bottom: 48px;
`
