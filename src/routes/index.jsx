import {Routes, Route} from 'react-router-dom';

import Main from '../pages/main';
import AboutMe from '../pages/aboutme';
import Portfolio from '../pages/portfolio';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' exact element={<Main />} />
            <Route path='/sobre' element={<AboutMe />} />
            <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
    )
}