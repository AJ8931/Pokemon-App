import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Theme from './Theme'

function App() {

  return (
    <>
      <Theme>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Theme>
    </>
  )
}

export default App
