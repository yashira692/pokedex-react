import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Entities from './pages/Entities'
import NavBar from './components/NavBar'


export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entities" element={<Entities />} />
      </Routes>
    </div>
  )
}