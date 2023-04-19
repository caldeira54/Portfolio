import {Routes, Route} from 'react-router-dom';

import Principal from '../paginas/principal';
import Sobre from '../paginas/sobre';
import Portfolio from '../paginas/portfolio';

export default function Rotas() {
    return (
        <Routes>
            <Route path='/' exact element={Principal} />
            <Route path='/sobre' element={Sobre} />
            <Route path='/portfolio' element={Portfolio} />
        </Routes>
    )
}