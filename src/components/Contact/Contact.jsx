import '../Contact/Contact.css'




function Contact() {
    return (
        <div className='background-contact'>
            <div className='primeira-coluna-contact'>
                <h2 className='subTitleSkills'>Contact</h2>
                <p className='phrase-contact'>I would love to hear about your project and how i could help. Please fill in the form, and i'll get back to you as soon as possible.</p>
            </div>
            <div className='segunda-coluna-contact'>
                <label>Nome</label>
                <input type="text" />
                <label>Email</label>
                <input type="text" />
                <label>Mensagem</label>
                <input type="text" />
            </div>
        </div>
    );
}

export default Contact;