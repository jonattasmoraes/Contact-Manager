import { useState } from 'react'
import AddButton from '../../components/AddButton'
import MobileSidebar from '../../containers/MobileSidebar'

import ContactList from '../../containers/contactList'
import Header from '../../containers/header'

import Sidebar from '../../containers/sidebar'
import { Container } from '../../styles'

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <Header handleSidebarToggle={handleSidebarToggle} />
      <MobileSidebar
        isOpen={isSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
        showFilters
      />
      <Container>
        <Sidebar showFilters />
        <ContactList />
        <AddButton />
      </Container>
    </>
  )
}

export default Home
