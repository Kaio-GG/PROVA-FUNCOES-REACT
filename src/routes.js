import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Exer1 from './pages/exercicio1/index.js'
import Exer2 from './pages/exercicio2/index.js'
import Exer3 from './pages/exercicio3/index.js'
import Exer4 from './pages/exercicio4/index.js'
import Exer5 from './pages/exercicio5/index.js'
import Exer6 from './pages/exercicio6/index.js'


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Exer1 />} />
                <Route path='/exer2' element={<Exer2 />}/>
                <Route path='/exer3' element={<Exer3/>} />
                <Route path='/exer4' element={<Exer4/>} />
                <Route path='/exer5' element={<Exer5/>} />                
                <Route path='/exer6' element={<Exer6/>} />
            </Routes>
        </BrowserRouter>
    )
}