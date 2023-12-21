import '../Projects/Projects.css'
import CardsList from '../cards/Cards'

export default function Projects() {
    return(
        <div className='project-backgorund'>
            <div>
            <h2 className='subTitleProjects'>Projects</h2>
            </div>
            <div className='colum-cards'>
            <CardsList/>    
            </div>
        </div>
    
    )}