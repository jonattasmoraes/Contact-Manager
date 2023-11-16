import styled from 'styled-components'

type Props = {
  active: boolean
}

export const Card = styled.div`
  display: flex;
  padding: 8px 16px 8px 16px;
  align-items: center;
  transition: 150ms ease-in-out;
  cursor: pointer;
  justify-content: space-between;

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

export const Counter = styled.div<Props>`
  color: ${(props) => (props.active ? '#673dff' : '#fff')};
  font-size: 16px;
  display: flex;
  padding: 4px 16px 4px 16px;
`

export const Label = styled.div<Props>`
  color: ${(props) => (props.active ? '#673dff' : '#fff')};
  display: flex;
  font-size: 16px;
`
