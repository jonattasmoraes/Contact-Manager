import { useState } from 'react'
import * as S from './styles'

type Props = {
  name: string
  email: string
  phone: string
  type: string
  status: string
  phoneType?: string
}

const Contact = ({ name, email, phone, type, status, phoneType }: Props) => {
  const [itsEditing, setItsEditing] = useState(false)

  return (
    <S.ContactCard>
      <S.MobileTitleContainer>
        <S.ContactTitle>Nome do contato</S.ContactTitle>
        <S.ContactTitle>E-mail</S.ContactTitle>
        <S.ContactTitlePhone>Telefone</S.ContactTitlePhone>
      </S.MobileTitleContainer>
      <S.DataContainer>
        <S.ContactTitleMobile>Nome do contato</S.ContactTitleMobile>
        <S.ContactData value={name} />
        <S.ContactTitleMobile>E-mail</S.ContactTitleMobile>
        <S.ContactData value={email} />
        <S.ContactTitleMobile>Telefone</S.ContactTitleMobile>
        <S.ContactDataPhone value={phone} />
      </S.DataContainer>
      <S.ContactTag type={type}>{type}</S.ContactTag>
      <S.ContactTag status={status}>{status}</S.ContactTag>
      <S.ContactTag phoneType={phoneType}>{phoneType}</S.ContactTag>
      <S.ActionBar>
        {itsEditing ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.CancelAndRemoveButton onClick={() => setItsEditing(true)}>
              Cancelar
            </S.CancelAndRemoveButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setItsEditing(true)}>Editar</S.Button>
            <S.CancelAndRemoveButton>Deletar</S.CancelAndRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.ContactCard>
  )
}

export default Contact
