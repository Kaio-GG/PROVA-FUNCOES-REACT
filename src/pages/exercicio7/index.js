import { useState } from 'react';
import './index.scss'


export default function Index() {
    const [inteiras, setInteiras] = useState('');
    const [meias, setMeias] = useState('');
    const [dia, setDias] = useState('');
    const [nacional, setNacional] = useState(false);

    const [resp, setResp] = useState('');



    function ing(int, mei, dia, naci){
        let meia = 14.25;
        let inteira = 28.50;

        console.log(int, mei, dia, naci)

        if(naci === true)
            setResp((5 * int) + (5 * mei))

        else if(dia === "Quarta-feira")
            inteira = 14.25
            
              
        else
        setResp((meia * mei) + (inteira * int))

    }

    return(
        <main>
            <h1>Quantos ingressos você quer?</h1>

            <input value={inteiras} onChange={e => setInteiras(e.target.value)} placeholder='Informe o numero de inteiras'/>

            <input value={meias} onChange={e => setMeias(e.target.value)}  placeholder='Informe o número de meias'/>

            <input value={dia} onChange={e => setDias(e.target.value)} placeholder='Informe o dia'/>

            <input type="checkbox"  onChange={e => setNacional(e.target.checked)} placeholder='Informe em números'/>

            <button onClick={() => ing(inteiras, meias, dia, nacional)}>Calcular</button>

            <p>{resp} Reais</p>

        </main>
    )


}