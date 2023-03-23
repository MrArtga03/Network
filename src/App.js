import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import HomePage from './pages/HomePage/HomePage'
import OrganizationsPage from './pages/OrganizationsPage/OrganizationsPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import MenuPage from './pages/MenuPage/MenuPage'
import Layout from './components/Layout/Layout'
import ChatPage from './pages/ChatPage/ChatPage'
import AuthPage from './pages/AuthPage/AuthPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import NoMatch from './pages/NoMatch/NoMatch'
import RequireAuth from './hoc/RequireAuth'
import AuthProvider from './hoc/AuthProvider'

const App = () => {
  return (
    <>
    <AuthProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='organizations' element={<OrganizationsPage />} />
              <Route path='chat' element={
                <RequireAuth>
                  <ChatPage />
                </RequireAuth>
              } />
              <Route path='menu' element={<MenuPage />} />
              <Route path='setting' element={<SettingsPage />} />
              <Route path='auth' element={<AuthPage/>}/> 
              <Route path='reg' element={<RegistrationPage />}/>
              <Route path='*' element={<NoMatch/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AuthProvider>
    </>
  )
}

export default App
