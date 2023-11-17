import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 86.4px);
  overflow-y: scroll;

  @media screen and (max-width: 959.9px) {
    display: inline-block;
  }
`
export const ContactParagraph = styled.p`
  font-weight: 600;
  padding: 8px 0 8px 0;
  padding-left: 22px;

  @media screen and (min-width: 959.9px) {
    padding-left: 28px;
  }
`
