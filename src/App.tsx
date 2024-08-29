import LoginPage from './pages/auth/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/auth/signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
