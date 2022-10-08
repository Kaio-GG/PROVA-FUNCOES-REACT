import { useState } from 'react'
import './index.scss'





export default function Index (){
const [mesv , setmes]= useState('')
const [diav , setdia]= useState(0)
const [resp , setresp]=useState('')

function libra (mes , dia){
    try{    
    Number(dia)
    if (( mes === 'setembro' && (dia >=  23 && dia<=31 )) || ( mes === 'outubro' && (dia >= 1 && dia <=22) )) {
      return setresp('É do signo libra? sim ')         
    }
     return setresp('É do signo libra? não')
}catch(err){
    console.log(err.message)
}
}
    return(
        <main className='mae'>
            <div>
                <h1>EXERCÍCIO 2</h1>
            </div>
            <div>
                <input type='text' placeholder=' digite o mês' onChange={e => setmes(e.target.value)}/>&ensp;
                <input type='number' placeholder=' digite o dia' value={diav} onChange={e => setdia(e.target.value)}/> &ensp;
                <button onClick={() => libra(mesv , diav)}>VERIFICAR</button>
            </div>
            {resp}
        </main>
    )
}