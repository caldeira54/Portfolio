import './main.css';
import Header from '../../components/header';
import Selfie from '../../assets/img/selfie.jpeg';
import Linkedin from '../../assets/img/linkedin.jpg';
import Github from '../../assets/img/github.jpg';
import Instagram from '../../assets/img/instagram.png';


function Principal() {

  return (
    <>
      <Header />

      <div className='app'>
        <div>
          <img src={Selfie} className='selfie'/>
        </div>

        <div className='nome'>
          <h2>Arthur Caldeira</h2>
          <span>Estudante</span>
        </div>

        <div className='redes-sociais'>
          <a href="https://www.linkedin.com/in/arthur-alves-caldeira-67b708228/"><img src={Linkedin} className='icone' /></a>
          <a href="https://github.com/caldeira54?tab=repositories"><img src={Github} className='icone' /></a>
          <a href="https://www.instagram.com/arthur_alves_caldeira/"><img src={Instagram} className='icone' /></a>
        </div>
      </div>
    </>
  )
}

export default Principal;
