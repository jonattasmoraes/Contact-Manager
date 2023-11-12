import * as S from './styles'

const Contact = () => (
  <S.ContactCard>
    <S.MobileTitleContainer>
      <S.ContactTitle>Nome do contato</S.ContactTitle>
      <S.ContactTitle>E-mail</S.ContactTitle>
      <S.ContactTitlePhone>Telefone</S.ContactTitlePhone>
    </S.MobileTitleContainer>
    <S.DataContainer>
      <S.ContactTitleMobile>Nome do contato</S.ContactTitleMobile>
      <S.ContactData>Jônattas Moraes</S.ContactData>
      <S.ContactTitleMobile>E-mail</S.ContactTitleMobile>
      <S.ContactData>jonattasmoraes@hotmail.com</S.ContactData>
      <S.ContactTitleMobile>Telefone</S.ContactTitleMobile>
      <S.ContactDataPhone>41 99999-9999</S.ContactDataPhone>
    </S.DataContainer>
    <S.ContactTag>Família</S.ContactTag>
    <S.ContactTag>Trabalho</S.ContactTag>
    <S.ContactTag>Emergencia</S.ContactTag>
    <S.ContactTag>Bloqueado</S.ContactTag>
    <S.ActionBar>
      <S.Button>Editar</S.Button>
      <S.Button>Deletar</S.Button>
    </S.ActionBar>
  </S.ContactCard>
)

export default Contact
