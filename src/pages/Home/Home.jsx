import NavMenu from '../../components/Nav/Nav'
import Banner from '../../components/Banner/Banner'
import SectionSkills from '../../components/Skills/SectionSkills'
import Projects from '../../components/Projects/Projects'
import Contact   from '../../components/Contact/Contact'


export default function Home() {
    return(
        <>
        <NavMenu />
        <Banner />
        <SectionSkills />
        <Projects />
        <Contact />
        </>
    )
}