import { useSelector } from 'react-redux'

import { Container } from './styles'
import Contact from '../../components/contact'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { contacts } = useSelector((state: RootReducer) => state)

  return (
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
}

export default ContactList
