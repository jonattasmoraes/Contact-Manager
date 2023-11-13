import Contact from '../../components/contact'
import { Container } from './styles'

const contacts = [
  {
    name: 'Jônattas Moraes',
    email: 'jonatas.moraes.09@hotmail.com',
    phone: '(41) 99999-9999',
    type: 'Família',
    status: 'Ativo',
    phoneType: 'Celular'
  },
  {
    name: 'Ana Julia',
    email: 'anajulia@hotmail.com',
    phone: '(41) 99999-9999',
    type: 'Amigos',
    status: 'Bloqueado',
    phoneType: 'Celular'
  },
  {
    name: 'Tiago Teixeira',
    email: 'tiago100@hotmail.com',
    phone: '(41) 3999-9999',
    type: 'Família',
    status: 'Ativo',
    phoneType: 'Fixo'
  },
  {
    name: 'Silvana teles',
    email: 'silvateles@hotmail.com',
    phone: '(41) 3699-9999',
    type: 'Trabalho',
    status: 'Bloqueado',
    phoneType: 'Fixo'
  },
  {
    name: 'Policia Militar',
    email: 'policia@gov.pr',
    phone: '190',
    type: 'Emergência',
    status: 'Ativo',
    phoneType: 'Fixo'
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
