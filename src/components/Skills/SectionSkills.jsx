import './SectionSkills.css'
import Titles from '../Titles/TitleSection'
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { SiNpm } from "react-icons/si";

export default function SectionSkills() {
    return (
        <div className='backgorund-skills' >
            
            <Titles 
            title='Skills'
            />
            <div className='table-skills'>
                <table>
                <tr>
                    <th><h4><FaHtml5 className='icone-lenguage'/>HTML</h4><p>3 Anos de Experiência</p></th>
                    <th><h4><IoLogoCss3 className='icone-lenguage'/>CSS</h4><p>3 Anos de Experiência</p></th>
                    <th><h4><RiJavascriptFill className='icone-lenguage'/>JAVA SCRIPT</h4><p>3 Anos de Experiência</p></th>
                    <th><h4><FaBootstrap className='icone-lenguage'/>BOOTSTRAP</h4><p>6 Meses de Experiência</p></th>
                    <th><h4><DiGithubBadge className='icone-lenguage'/>Github</h4><p>1 Meses de Experiência</p></th>
                    <th><h4><RiReactjsLine className='icone-lenguage'/>REACT</h4><p>6 Meses de Experiência</p></th>
                    <th><h4><RiReactjsLine className='icone-lenguage'/>REACT NATIVE</h4><p>6 Meses de Experiência</p></th>
                    <th><h4><DiNodejsSmall className='icone-lenguage'/>NODE JS</h4><p>6 Meses de Experiência</p></th>
                    <th><h4><DiNodejsSmall className='icone-lenguage'/>EXPRESS</h4><p>6 Meses de Experiência</p></th>
                    <th><h4><SiNpm className='icone-lenguage'/> NPM</h4><p>1 Meses de Experiência</p></th>
                </tr>
            </table>
            </div>
        </div>
    )
}

