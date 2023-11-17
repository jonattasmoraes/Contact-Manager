import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Circle = styled(Link)`
  display: flex;
  font-size: 40px;
  font-weight: 600;
  height: 64px;
  width: 64px;
  background-color: #673dff;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-bottom: 9px;
  padding-left: 2px;
  text-decoration: none;
`
