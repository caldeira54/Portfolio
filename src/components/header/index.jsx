import { useNavigate } from 'react-router-dom';

import './header.css';

export default function Header() {
    const navigate = useNavigate();

    function home() {
        return navigate('/');
    }

    function aboutMe() {
        return navigate('aboutme');
    }

    function portfolio() {
        return navigate('portfolio');
    }

    return (
        <div className='container'>
            <div className='name'>
                <small>Arthur Caldeira</small>
            </div>

            <div className='menu'>
                <a onClick={home}>Home</a>
                <a onClick={aboutMe}>Sobre mim</a>
                <a onClick={portfolio}>Portfolio</a>
            </div>
        </div>
    );
}