import './App.css'
import Cabecalho from './componentes/cabecalho/cabecalho'

function App() {

  return (
    <>
      <Cabecalho />

      <div className='container'>
        <div className='img'>
          <img src="./assets/rosto.jpeg" alt="ROSTO" />
        </div>

        <div className='nome'>
          <h2>Arthur Caldeira</h2>
        </div>

        <div className='redes-sociais'>
          <a href="https://www.linkedin.com/in/arthur-alves-caldeira-67b708228/">Linkedin</a>
          <a href="https://github.com/caldeira54?tab=repositories">GitHub</a>
        </div>
      </div>
    </>
  )
}

export default App
