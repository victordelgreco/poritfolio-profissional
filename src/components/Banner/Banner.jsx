import '../Banner/Banner.css'
import PhotoPerfil from '../../img/victor-image.png'
import ButtonContactMe from '../Button/ButtonContateMe/ButtonContateMe'

export default function Banner() {
    return (
        <div className="banner-backgorund">
            <div className='section'>
            <h1 className='frase-de-bem-vindo' >Bem Vindo ao meu Portifólio! Meu nome é Victor </h1>
            <p className='description-victor'>My name is Victor Del Greco Gomes, i'm 25 years old, I'm a Front End developer, below you can find the areas I work and/or study</p>
            <ButtonContactMe />
            </div>
            <img className='image-perfil' src={PhotoPerfil} alt="" />
        </div>
    )
}


