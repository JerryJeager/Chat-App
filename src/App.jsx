import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Register /> } />
        <Route path='/Login' element={ <Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
