import './header.css' ;

export default function Header() {
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