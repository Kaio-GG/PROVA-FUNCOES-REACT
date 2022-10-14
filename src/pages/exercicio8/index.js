import { useState } from 'react';
import './index.scss'

export default function Index(){
    const [ganhosx, setGanhosx] = useState('');
    const [gastosx, setGastosx] = useState('');

    const [resp, setResp] = useState('');


    function GG(ganhos, gastos){
        let x = ganhos - gastos
        let porc = (x / ganhos) * 100;
        let c = porc - 100;
        let a = Math.abs(c);
                
        if(a > 100)
            setResp('Não pode não, paro✋✋')

        else if(a > 81 && a <= 100)
            setResp('Cuidado seu orçamento pode ficar comprometido')

        else if(a > 51 && a < 81)
            setResp('Atenção, melhor conter os gastos')

        else if(a > 21 && a <= 50)
            setResp('Muito bem, gastos não ultrapassaram metade dos ganhos!')

        else
            setResp('Parabéns, está gerenciando bem seu orçamento! ')
        
        console.log(a)

    }

    return(
        <main>
            <h1>Ganhos e gastos</h1>

            <input value={ganhosx} onChange={e => setGanhosx(e.target.value)} placeholder='Ganhos'/>

            <input value={gastosx} onChange={e => setGastosx(e.target.value)} placeholder='Gastos'/>

            <button onClick={() => GG(ganhosx, gastosx)}> Calcular</button>

            <p>{resp}</p>

        </main>

    )

}