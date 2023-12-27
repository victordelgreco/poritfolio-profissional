import '../Contact/Contact.css'
import Titles from '../Titles/TitleSection'



function Contact() {
    return (
        <div className='background-contact'>
            <div className='primeira-coluna-contact'>
                <Titles title='Contact'/>
                <p className='phrase-contact'>I would love to hear about your project and how i could help. Please fill in the form, and i'll get back to you as soon as possible.</p>
            </div>
            <div className='segunda-coluna-contact'>
                <div className='form-envio'>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                <div className='form-envio'>
                    <label>E-mail</label>
                    <input type="text" />
                </div>
                <div className='form-envio'>
                    <label>Texto</label>
                    <input type="text" />
                </div>
                </div>
            </div>
            );
}

            export default Contact;