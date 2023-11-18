import styled from 'styled-components'

export const FormContainer = styled.form`
  max-width: 560px;
  margin-left: 38px;

  @media screen and (max-width: 959.9px) {
    max-width: 100%;
    width: 90%;
    margin: 0 auto;
  }
`

export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 12px;
  }

  input {
    margin-right: 4px;
    margin-bottom: 16px;
  }

  label {
    margin-right: 16px;
  }
`

export const TitleForm = styled.h3`
  font-weight: 600;
  font-size: 16px;
`

export const Opcao = styled.div`
  display: inline-block;
  text-transform: capitalize;
`
