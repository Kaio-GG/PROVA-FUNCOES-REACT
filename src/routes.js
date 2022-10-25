import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Exer1 from './pages/exercicio1/index.js'
import Exer2 from './pages/exercicio2/index.js'
import Exer3 from './pages/exercicio3/index.js'
import Exer4 from './pages/exercicio4/index.js'
import Exer5 from './pages/exercicio5/index.js'
import Exer6 from './pages/exercicio6/index.js'
import Exer7 from './pages/exercicio7/index.js'
import Exer8 from './pages/exercicio8/index.js'
import Exer9 from './pages/exercicio9/index.js'
import Exer10 from './pages/exercicio10/index.js'
import Exer11 from './pages/exercicio11/index.js'
import Exer12 from './pages/exercicio12/index.js'
import Exer13 from './pages/sistemaMedia/index.js'


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
                <Route path='/exer7' element={<Exer7/>} />
                <Route path='/exer8' element={<Exer8/>} />
                <Route path='/exer9' element={<Exer9/>} />
                <Route path='/exer10' element={<Exer10/>} />
                <Route path='/exer11' element={<Exer11/>} />
                <Route path='/exer12' element={<Exer12/>} />
                <Route path='/sistema' element={<Exer13/>} />

            </Routes>
        </BrowserRouter>
    )
}