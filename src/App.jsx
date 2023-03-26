import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Register /> } />
        <Route path='/Login' element={ <Login />} />
        <Route path='/Home' element={ <Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
