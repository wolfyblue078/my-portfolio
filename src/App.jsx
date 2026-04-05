import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/homePage'
import About from './pages/About/aboutUs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path='/about' element={<About />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
