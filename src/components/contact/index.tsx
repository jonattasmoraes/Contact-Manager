import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remove, edit } from '../../store/reducers/contacts'
import ContactClass from '../../models/Contact'
import { Button, SaveButton } from '../../styles'

type Props = ContactClass

const Contact = ({
  name: originalName,
  email: originalEmail,
  phone: originalPhone,
  type,
  status,
  phoneType,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [itsEditing, setItsEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
    if (originalPhone.length > 0) {
      setPhone(originalPhone)
    }
  }, [originalName, originalEmail, originalPhone])

  function cancelEdit() {
    setItsEditing(false)
    setName(originalName)
    setEmail(originalEmail)
    setPhone(originalPhone)
  }

  return (
    <S.ContactCard>
      <S.MobileTitleContainer>
        <S.ContactTitle>Nome do contato</S.ContactTitle>
        <S.ContactTitle>E-mail</S.ContactTitle>
        <S.ContactTitlePhone>Telefone</S.ContactTitlePhone>
      </S.MobileTitleContainer>
      <S.DataContainer>
        <S.ContactTitleMobile>Nome do contato</S.ContactTitleMobile>
        <S.ContactData
          disabled={!itsEditing}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <S.ContactTitleMobile>E-mail</S.ContactTitleMobile>
        <S.ContactData
          disabled={!itsEditing}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <S.ContactTitleMobile>Telefone</S.ContactTitleMobile>
        <S.ContactDataPhone
          disabled={!itsEditing}
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </S.DataContainer>
      <S.ContactTag parameter="type" type={type}>
        {type}
      </S.ContactTag>
      <S.ContactTag parameter="status" status={status}>
        {status}
      </S.ContactTag>
      <S.ContactTag parameter="phoneType" phoneType={phoneType}>
        {phoneType}
      </S.ContactTag>
      <S.ActionBar>
        {itsEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    id,
                    name,
                    email,
                    phone,
                    type,
                    status,
                    phoneType
                  })
                )
                setItsEditing(false)
              }}
            >
              Salvar
            </SaveButton>

            <S.CancelAndRemoveButton onClick={cancelEdit}>
              Cancelar
            </S.CancelAndRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setItsEditing(true)}>Editar</Button>
            <S.CancelAndRemoveButton onClick={() => dispatch(remove(id))}>
              Deletar
            </S.CancelAndRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.ContactCard>
  )
}

export default Contact
