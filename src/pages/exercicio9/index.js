import {linha} from '../../services/linha/index.js'
import { useState } from 'react';



export default function Linha (){
const [ n1 , setn1] =useState(0)
const [resp ,setresp] = useState([])
const [valor , setvalor]= useState('')

function chamar (n1){
      setresp = linha(n1)
}
        



    return(
        <div>
            <input value={n1} onChange={e => setn1(e.target.value)}/>
            <button onClick={() => chamar(n1)}>clicar</button>
            {resp}
        </div>
    )
}

