import { React, useState } from 'react';

import './footer.css';

function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='container-footer'>
            <div className='form'>
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
            </div>
        </div>
    )
}

export default Footer;