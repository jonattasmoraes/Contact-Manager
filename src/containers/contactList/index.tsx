import Contact from '../../components/contact'
import { Container } from './styles'

import * as enums from '../../utils/enums/Contact'

const contacts = [
  {
    name: 'Marcos Paulo',
    email: 'marcospau@hotmail.com',
    phone: '(41) 99999-9999',
    type: enums.Type.AMIGOS,
    status: enums.Status.ATIVO,
    phoneType: enums.PhoneType.CELULAR
  },
  {
    name: 'Jônattas Moraes',
    email: 'jonatas.moraes.09@hotmail.com',
    phone: '(41) 99999-9999',
    type: enums.Type.FAMILIA,
    status: enums.Status.ATIVO,
    phoneType: enums.PhoneType.CELULAR
  },
  {
    name: 'Ana Julia',
    email: 'anajulia@hotmail.com',
    phone: '(41) 99999-9999',
    type: enums.Type.AMIGOS,
    status: enums.Status.BLOQUEADO,
    phoneType: enums.PhoneType.CELULAR
  },
  {
    name: 'Tiago Teixeira',
    email: 'tiago100@hotmail.com',
    phone: '(41) 3999-9999',
    type: enums.Type.FAMILIA,
    status: enums.Status.ATIVO,
    phoneType: enums.PhoneType.FIXO
  },
  {
    name: 'Silvana teles',
    email: 'silvateles@hotmail.com',
    phone: '(41) 3699-9999',
    type: enums.Type.TRABALHO,
    status: enums.Status.BLOQUEADO,
    phoneType: enums.PhoneType.FIXO
  },
  {
    name: 'Policia Militar',
    email: 'policia@gov.pr',
    phone: '190',
    type: enums.Type.EMERGENCIA,
    status: enums.Status.ATIVO,
    phoneType: enums.PhoneType.FIXO
  }
]

const ContactList = () => (
  <Container>
    <p>cinco contatos marcados para amanhã</p>
    <ul>
      {contacts.map((c) => (
        <li key={c.name}>
          <Contact
            name={c.name}
            email={c.email}
            phone={c.phone}
            type={c.type}
            status={c.status}
            phoneType={c.phoneType}
          />
        </li>
      ))}
    </ul>
  </Container>
)
export default ContactList
