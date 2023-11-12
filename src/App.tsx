import { useState } from 'react'
import Header from './containers/header'
import MobileSidebar from './containers/MobileSidebar'
import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/sidebar'
import ContactList from './containers/contactList'

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Header handleSidebarToggle={handleSidebarToggle} />
      <MobileSidebar
        isOpen={isSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
      />
      <Container>
        <Sidebar />
        <ContactList />
      </Container>
    </>
  )
}

export default App
