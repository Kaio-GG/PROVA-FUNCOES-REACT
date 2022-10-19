import './index.scss'
import cafeMinimo from '../../services/cafe/index.js'
import { useState } from 'react'






export default function Index(){
const [alunos ,setalunos] =useState(0)
const [litros ,setlitros] =useState(0)
const [qtdCafeAluno ,seqtdCafeAluno] =useState(0)
const [resp , setresp] =useState(0)

function somar (n,l,d){
  Number(n,l,d)  
  let a=  cafeMinimo(n,l,d)
  setresp(a)
}

    return(
        <div>
            <input type='number' onChange={e => setalunos(e.target.value)}/>
            <input type='number' onChange={e => setlitros(e.target.value)}/>
            <input type='number' onChange={e => seqtdCafeAluno(e.target.value)}/>
            <button onClick={() => somar(Number( alunos) ,Number(litros) ,Number( qtdCafeAluno))}>somar</button>
            {resp}
        </div>
    )
}