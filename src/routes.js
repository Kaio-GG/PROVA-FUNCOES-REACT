import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Exer1 from './pages/exercicio1/index.js'
import Exer2 from './pages/exercicio2/index.js'
import Exer3 from './pages/exercicio3/index.js'


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Exer1 />} />
                <Route path='/exer2' element={<Exer2 />} />
                <Route path='/exer3' element={<Exer3/>} />
            </Routes>
        </BrowserRouter>
    )
}