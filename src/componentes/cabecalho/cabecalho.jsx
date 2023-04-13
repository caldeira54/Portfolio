import './cabecalho.css' ;

export default function Cabecalho() {
    return (
        <div className='container'>
            <div className='nome'>
                <small>Arthur Caldeira</small>
            </div>

            <div className='menu'>
                <a href="#">Sobre mim</a>
                <a href="#">Portfolio</a>
            </div>
        </div>
    );
}