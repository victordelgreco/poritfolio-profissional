import '../Projects/Projects.css'
import CardsList from '../cards/Cards'
import Titles from '../Titles/TitleSection'

export default function Projects() {
    return (
        <div className='project-backgorund'>
            <div>
                <Titles
                    title='Projects' />
            </div>
            <div className='colum-cards'>
                <CardsList />
            </div>
        </div>

    )
}