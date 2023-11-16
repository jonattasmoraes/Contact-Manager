import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from './styles'
import Contact from '../../components/contact'
import { RootReducer } from '../../store'

const ContactList: React.FC = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const contactsFilter = () => {
    const searchTerm = term.toLowerCase()
    return items.filter(
      (item) => item.name.toLowerCase().indexOf(searchTerm) !== -1
    )
  }

  return (
    <Container>
      <p>cinco contatos marcados como: opcao e {term}</p>
      <ul>
        {contactsFilter().map((c) => (
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
