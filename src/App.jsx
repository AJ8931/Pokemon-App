import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Theme from './Theme'
import Search from './Components/Search'
import Open_Pokemon from './Components/open_Pokemon'

function App() {

  return (
    <>
      <Theme>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/Pokemon" element={<Open_Pokemon />} />
        </Routes>
      </Theme>
    </>
  )
}

export default App
