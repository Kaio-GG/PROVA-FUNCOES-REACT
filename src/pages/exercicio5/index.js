import { useState } from 'react'
import './index.scss'

export default function Index() {
    const [capac ,setcapac]=useState(0)
    const [consumo, setconsumo] = useState(0)
    const [dist, setdist] = useState(0)
    const [resp , setresp]= useState(0)

    function paradas (capacidade , consumo , distancia){
        Number(capacidade,consumo,distancia)
        let a = distancia/(consumo*capacidade)
        
        setresp(Math.ceil(a))
    }

    return(

        <main className='mae'>
        <div>
            <h1>EXERCÍCIO 5</h1>
        </div>
        <div>
            <input type='number' placeholder=' digite a capacidade' onChange={e => setcapac(e.target.value)}/>&ensp;
            <input type='number' placeholder=' digite o consumo'  onChange={e => setconsumo(e.target.value)}/> &ensp;
            <input type='number' placeholder=' digite a distancia' onChange={e => setdist(e.target.value)}/>&ensp;
            <button onClick={() => paradas(capac,consumo , dist)}>CALCULAR</button>
        </div>
        {resp}
    </main>
    )





}