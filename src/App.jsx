import NavMenu from './components/Nav/Nav'
import './index.css'
import Banner from './components/Banner/Banner'
import SectionSkills from './components/Skills/SectionSkills'
import Projects from './components/Projects/Projects'
import Contact   from './components/Contact/Contact'
function App() {

  return (

    <>      
      <NavMenu />
      <Banner />
      <SectionSkills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
