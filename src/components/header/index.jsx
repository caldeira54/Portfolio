import { useNavigate } from 'react-router-dom';

import './header.css';

export default function Header() {
    const navigate = useNavigate();

    function aboutMe() {
        return navigate('../../pages/aboutme');
    }

    function portfolio() {
        return navigate('../../pages/portfolio');
    }

    return (
        <div className='container'>
            <div className='name'>
                <small>Arthur Caldeira</small>
            </div>

            <div className='menu'>
                <a onClick={aboutMe}>Sobre mim</a>
                <a onClick={portfolio}>Portfolio</a>
            </div>
        </div>
    );
}