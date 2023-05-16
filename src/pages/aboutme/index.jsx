import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import './aboutme.css';

import Photo from '../../assets/img/photo.jpg';
import Php from '../../assets/img/php.png';
import Java from '../../assets/img/java.png';
import JavaScript from '../../assets/img/javascript.png';
import Html from '../../assets/img/html.png';
import Css from '../../assets/img/css.png';
import C from '../../assets/img/c.png';


function AboutMe() {
    return (
        <>
            <Header />

            <div className='container-aboutme'>
                <div className='photo'>
                    <img src={Photo} />
                </div>

                <div className='aboutme'>
                    <div className='title-aboutme'>
                        <h1>SOBRE MIM</h1>  
                    </div>

                    <p>
                        Olá, me chamo Arthur tenho 21 anos sou natural de Aricanduva. Atualmente estou
                        no 7º período do curso Sistemas de Informação do Intituto Federal Campus São João
                        Evangelista. Sou organizado, detalhista, preocupado em produzir trabalhos de qualidade 
                        e frequentemente não meço esforços para que o resultado seja o melhor possível. Busco
                        sempre melhorar. Além de estudar estou fazendo parte da empresa júnior OneBit aqui do 
                        IFMG-SJE. Já participei da II Maratona de Programação Intercampi que aconteceu em 2020
                        entre alguns IFMGs, na ocasião pude me sagrar campeão, ficando em primeiro lugar.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AboutMe;