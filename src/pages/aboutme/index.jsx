import React from 'react';

import Header from '../../components/header';
import './aboutme.css';

import Photo from '../../assets/img/selfie.jpeg';

function AboutMe() {
    return (
        <>
            <Header />

            <div className='container-aboutme'>
                <div className='photo'>
                    <img src={Photo} />
                </div>

                <div className='aboutme'>
                    <div className='title'>
                        <h1>SOBRE MIM</h1>
                    </div>

                    <p>
                        Olá, me chamo Arthur tenho 21 anos sou natural de Aricanduva. Atualmente estou
                        no 7º período do curso Sistemas de Informação do Intituto Federal Campus São João
                        Evangelista. Sou organizado, detalhista, preocupado em produzir trabalhos de qualidade 
                        e frequentemente não meço esforços para que o resultado seja o melhor possível. Busco
                        sempre melhorar. Além de estudar estou fazendo parte da empresa júnior OneBit aqui do 
                        IGMG-SJE.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutMe;