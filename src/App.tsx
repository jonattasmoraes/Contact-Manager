import { useState } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MobileSidebar from './containers/MobileSidebar'
import store from './store'
import Header from './containers/header'

import GlobalStyle, { Container } from './styles'
import Home from './pages/Home'
import NewContact from './pages/new'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <NewContact />
  }
])

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
        <RouterProvider router={router} />
      </Container>
    </Provider>
  )
}

export default App
