import { useState } from 'react'
import * as S from './styles'

type Props = {
  name: string
  email: string
  phone: string
  type: string
  state: string
}

const Contact = ({ name, email, phone, type, state }: Props) => {
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
      <S.ContactTag>{type}</S.ContactTag>
      <S.ContactTag>{state}</S.ContactTag>
      <S.ActionBar>
        {itsEditing ? (
          <>
            <S.Button>Salvar</S.Button>
            <S.Button onClick={() => setItsEditing(true)}>Cancelar</S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => setItsEditing(true)}>Editar</S.Button>
            <S.Button>Deletar</S.Button>
          </>
        )}
      </S.ActionBar>
    </S.ContactCard>
  )
}

export default Contact
