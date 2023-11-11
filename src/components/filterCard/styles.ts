import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  padding: 8px 16px 8px 18px;
  align-items: center;
  transition: 150ms ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    &:hover {
      background-color: #3e4245;
    }
  }

  @media screen and (min-width: 959.9px) {
    &:hover {
      background-color: #3e4245;
    }
  }
`

export const Counter = styled.div`
  color: #fff;
  font-size: 16px;
  display: flex;
`

export const Label = styled.div`
  color: #fff;
  display: flex;
  font-size: 16px;
  padding-right: 24px;
`
