import { useState } from 'react'
import Header from './containers/header'
import MobileSidebar from './containers/MobileSidebar'
import GlobalStyle from './styles'
import Sidebar from './containers/sidebar'

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
      <Sidebar />
    </>
  )
}

export default App
