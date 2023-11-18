import { useState } from 'react'
import Form from '../../containers/Form'
import MobileSidebar from '../../containers/MobileSidebar'
import Header from '../../containers/header'
import Sidebar from '../../containers/sidebar'
import { Container } from '../../styles'

const NewContact = () => {
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
        showFilters={false}
      />
      <Container>
        <Sidebar showFilters={false} />
        <Form />
      </Container>
    </>
  )
}
export default NewContact
