import { useState } from 'react'
import './index.scss'

export default function Index() {
    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');
    const [resp, setResp] = useState([]);


    function contagem(comeco, final) {
        let a = resp

        for (comeco; comeco <= final; comeco++) {
            a = [...a, comeco];
        }
        return setResp(a);
    }

    return (
        <main>

            <h1>informe o numero de inicio</h1>
            <input type='number' value={inicio} onChange={e => setInicio(e.target.value)} />

            <h1>informe o numero de fim</h1>
            <input type='number' value={fim} onChange={e => setFim(e.target.value)} />

            <button onClick={() => contagem(inicio, fim)}>Contar</button>

            <p>{resp}</p>


        </main>
    )

}
