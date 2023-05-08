import React from 'react';

import './footer.css';

function Footer() {
    return (
        <div className='container-footer'>
            <div className='form'>
                <div className='field'>
                    <span>Nome</span>
                    <input type="text" className='input' />
                </div>

                <div className='field'>
                    <span>Assunto</span>
                    <input type="text" className='input' />
                </div>

                <div className='field'>
                    <span>Descrição</span>
                    {/* <textarea cols="30" rows="5" className='input' /> */}
                    <input type="text" className='input' />
                </div>
            </div>
        </div>
    )
}

export default Footer;