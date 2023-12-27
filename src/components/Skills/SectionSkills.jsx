import './SectionSkills.css'
import Titles from '../Titles/TitleSection'

export default function SectionSkills() {
    return (
        <div className='backgorund-skills' >
            
            <Titles 
            title='Skills'
            />
            <div className='table-skills'>
                <table>
                <tr>
                    <th><h4>HTML</h4><p>3 Anos de Experiência</p></th>
                    <th><h4>CSS</h4><p>3 Anos de Experiência</p></th>
                    <th><h4>JAVA SCRIPT</h4><p>3 Anos de Experiência</p></th>
                    <th><h4>BOOTSTRAP</h4><p>6 Meses de Experiência</p></th>
                </tr>
                <tr>
                    <th><h4>REACT</h4><p>6 Meses de Experiência</p></th>
                    <th><h4>REACT NATIVE</h4><p>6 Meses de Experiência</p></th>
                    <th><h4>NODE JS</h4><p>6 Meses de Experiência</p></th>
                    <th><h4>EXPRESS</h4><p>6 Meses de Experiência</p></th>
                </tr>
            </table>
            </div>
        </div>
    )
}

