import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { Container } from './styles'

import Contact from '../../components/contact'

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)

  return (
    <Container>
      <p>cinco contatos marcados para amanhã</p>
      <ul>
        {items.map((c) => (
          <li key={c.name}>
            <Contact
              id={c.id}
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
