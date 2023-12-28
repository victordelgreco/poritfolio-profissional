import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import MyProjects from './pages/MyProjects/MyProjects'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="myprojects" element={<MyProjects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


