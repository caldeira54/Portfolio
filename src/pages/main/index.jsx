import React from 'react';

import './main.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Selfie from '../../assets/img/selfie.jpeg';
import Linkedin from '../../assets/img/linkedin.png';
import Github from '../../assets/img/github.png';
import Instagram from '../../assets/img/instagram.png';


function Principal() {

  return (
    <>
      <Header />

      <div className='app'>
        <img src={Selfie} className='selfie' />

        <div className='nome'>
          <h2>Arthur Caldeira</h2>
          <span>Estudante</span>
        </div>

        <div className='redes-sociais'>
          <a href="https://www.linkedin.com/in/arthur-alves-caldeira-67b708228/" target="blank"><img src={Linkedin} className='icone' /></a>
          <a href="https://github.com/caldeira54?tab=repositories" target="blank"><img src={Github} className='icone' /></a>
          <a href="https://www.instagram.com/arthur_alves_caldeira/" target="blank"><img src={Instagram} className='icone' /></a>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Principal;
