import { React, useState } from 'react';
import emailjs from '@emailjs/browser';

import './footer.css';

import Php from '../../assets/img/php.png';
import Java from '../../assets/img/java.png';
import JavaScript from '../../assets/img/javascript.png';
import Html from '../../assets/img/html.png';
import Css from '../../assets/img/css.png';
import C from '../../assets/img/c.png';

function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos!');
            return;
        }

        const templatePrams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_wz5j96i', 'template_ckpe08i', templatePrams, 'iJpUMajC_j117gvW8')
            .then((response) => {
                console.log('Email enviado', response.status, response.text);
                setName('');
                setEmail('');
                setMessage('');
            }, (err) => {
                console.log('Erro: ', err);
            });
    }

    return (
        <div className='container-footer'>
            <form className='form' onSubmit={sendEmail}>
                <h1 className='title'>Contato</h1>

                <div className='field'>
                    <span>Nome</span>
                    <input
                        type="text"
                        className='input'
                        placeholder='Digite seu nome'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div className='field'>
                    <span>Email</span>
                    <input
                        type="text"
                        className='input'
                        placeholder='Digite seu enmail'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className='field'>
                    <span>Mensagem</span>
                    <textarea
                        cols="30"
                        rows="5"
                        className='input'
                        placeholder='Digite sua mensagem'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </div>

                <input type='submit' className='button' value='Enviar' />
            </form>

            <div className='form'>
                <h1 className='title'>Habilidades</h1>

                <div className='icons'>
                    <img src={Php} />
                    <img src={Java} />
                    <img src={JavaScript} />
                    <img src={C} />
                    <img src={Css} />
                    <img src={Html} />
                </div>
            </div>
        </div>
    )
}

export default Footer;