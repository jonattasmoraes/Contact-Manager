import styled from 'styled-components'

export const Aside = styled.aside`
  width: 300px;
  height: calc(100vh - 110.1px);
  padding: 18px;
  margin-top: 24px;
  margin-left: 24px;
  background-color: #1a202c;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;

  @media screen and (max-width: 959.9px) {
    display: none;
  }
`

export const Filters = styled.div`
  margin-bottom: 48px;
`
