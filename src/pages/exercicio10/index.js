import { useState } from 'react'
import './index.scss'

export default function Index(){    
    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');

    const [resp, setResp] = useState('');

    function contagem(começo, final){

        for(começo; começo <= final; começo++){
            setResp(começo)
        }

    }

    return(
        <main>

            <h1>informe o numero de inicio</h1>
            <input value={inicio} onChange={e => setInicio(e.target.value)} />

            <h1>informe o numero de fim</h1>
            <input value={fim} onChange={e => setFim(e.target.value)} />

            <button onClick={() => contagem(inicio, fim)}>Contar</button>

            {resp}

            
        </main>
    )

}
