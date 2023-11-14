import { useState } from 'react'
import Header from './containers/header'
import MobileSidebar from './containers/MobileSidebar'
import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/sidebar'
import ContactList from './containers/contactList'
import { Provider } from 'react-redux'

import store from './store'

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
