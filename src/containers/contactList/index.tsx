import React from 'react'
import { useSelector } from 'react-redux'
import { ContactParagraph, Container } from './styles'
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

  const contactsMessage = (quantity: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e termo "${term}"` : ''

    if (critery === 'all') {
      message = `${quantity} contato(s) marcado(s) como: "Todos" ${complement}`
    } else {
      message = `${quantity} contato(s) marcado(s) como: "${value}" ${complement}`
    }

    return message
  }

  const Contacts = contactsFilter()
  const message = contactsMessage(Contacts.length)

  return (
    <Container>
      <ContactParagraph>{message}</ContactParagraph>
      <ul>
        {Contacts.map((c) => (
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
