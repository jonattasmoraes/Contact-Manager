import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remove, edit } from '../../store/reducers/contacts'
import ContactClass from '../../models/Contact'

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
  const [name, setName] = useState(originalName)
  const [email, setEmail] = useState(originalEmail)
  const [phone, setPhone] = useState(originalPhone)

  useEffect(() => {
    if (originalName.length > 0) {
      setItsEditing
      setName(originalName)
    }
  }, [originalName])

  useEffect(() => {
    if (originalEmail.length > 0) {
      setItsEditing
      setName(originalEmail)
    }
  }, [originalEmail])

  useEffect(() => {
    if (originalPhone.length > 0) {
      setItsEditing
      setName(originalPhone)
    }
  }, [originalPhone])

  function handleRemove() {
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
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <S.ContactTitleMobile>E-mail</S.ContactTitleMobile>
        <S.ContactData
          disabled={!itsEditing}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <S.ContactTitleMobile>Telefone</S.ContactTitleMobile>
        <S.ContactDataPhone
          disabled={!itsEditing}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
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
            <S.SaveButton
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
            </S.SaveButton>

            <S.CancelAndRemoveButton onClick={handleRemove}>
              Cancelar
            </S.CancelAndRemoveButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setItsEditing(true)}>Editar</S.Button>
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
