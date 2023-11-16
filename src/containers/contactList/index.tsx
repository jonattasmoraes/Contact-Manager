import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from './styles'
import Contact from '../../components/contact'
import { RootReducer } from '../../store'

const ContactList: React.FC = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { term, critery, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const contactsFilter = () => {
    let filteredContacts = items

    if (term !== undefined) {
      filteredContacts = filteredContacts.filter(
        (item) => item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1
      )

      if (critery === 'type') {
        filteredContacts = filteredContacts.filter(
          (item) => item.type === value
        )
      } else if (critery === 'status') {
        filteredContacts = filteredContacts.filter(
          (item) => item.status === value
        )
      } else if (critery === 'phoneType') {
        filteredContacts = filteredContacts.filter(
          (item) => item.phoneType === value
        )
      }

      return filteredContacts
    } else {
      return items
    }
  }

  return (
    <Container>
      <p>cinco contatos marcados como: opcao e {term}</p>
      <ul>
        <li>{term}</li>
        <li>{critery}</li>
        <li>{value}</li>
      </ul>
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
