import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { TitleAdd, Input, MainContainer, SaveButton } from '../../styles'
import { FormContainer, Options, Opcao, TitleForm } from './styles'

import * as enums from '../../utils/enums/Contact'
import Contact from '../../models/Contact'
import { add } from '../../store/reducers/contacts'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [type, setType] = useState(enums.Type.FAMILIA)
  const [status, setStatus] = useState(enums.Status.ATIVO)
  const [phoneType, setPhoneType] = useState(enums.PhoneType.CELULAR)

  const addContact = (event: FormEvent) => {
    event.preventDefault()
    const contactToAdd = new Contact(
      name,
      email,
      phone,
      type,
      status,
      phoneType,
      15
    )

    dispatch(add(contactToAdd))
    navigate('/')
  }

  return (
    <MainContainer>
      <FormContainer onSubmit={addContact}>
        <TitleAdd as="p">Adicionar novo contato</TitleAdd>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Nome contato"
        />
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="E-mail"
        />
        <Input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          type="text"
          placeholder="Telefone"
        />
        <Options>
          <TitleForm>Tipo</TitleForm>
          {Object.values(enums.Type).map((type) => (
            <Opcao key={type}>
              <input
                value={type}
                name="type"
                type="radio"
                onChange={(event) => setType(event.target.value as enums.Type)}
                id={type}
                defaultChecked={type === enums.Type.FAMILIA}
              />
              <label htmlFor={type}>{type}</label>
            </Opcao>
          ))}
          <TitleForm>Tipo de Telefone</TitleForm>
          {Object.values(enums.PhoneType).map((phoneType) => (
            <Opcao key={phoneType}>
              <input
                value={phoneType}
                name="phonetype"
                type="radio"
                onChange={(event) =>
                  setPhoneType(event.target.value as enums.PhoneType)
                }
                id={phoneType}
                defaultChecked={phoneType === enums.PhoneType.FIXO}
              />
              <label htmlFor={phoneType}>{phoneType}</label>
            </Opcao>
          ))}
          <TitleForm>Status</TitleForm>
          {Object.values(enums.Status).map((status) => (
            <Opcao key={status}>
              <input
                value={status}
                name="status"
                type="radio"
                onChange={(event) =>
                  setStatus(event.target.value as enums.Status)
                }
                id={status}
                defaultChecked={status === enums.Status.ATIVO}
              />
              <label htmlFor={status}>{status}</label>
            </Opcao>
          ))}
        </Options>
        <SaveButton type="submit">Salvar</SaveButton>
      </FormContainer>
    </MainContainer>
  )
}

export default Form
