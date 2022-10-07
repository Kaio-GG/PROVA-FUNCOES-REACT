import { useState } from "react";


export default function Index() {
    const [temperatura, setTemperatura] = useState('');

    const [resp, setResp] = useState('')


    function chetemp(temp){
        let msg = '';
    
        if(temp < 36)
            msg = 'Hipotermia';
    
        else if(temp >= 36 && temp <= 37.6)
            msg = 'Normal'
    
        else if(temp >= 37.6 && temp < 39.6)
            msg = 'Febre'
    
        else if(temp >= 39.6 && temp < 41)
            msg = 'Febre alta'


        else if(temp >= 41 )
            msg = 'Hipertemia'

        else if(isNaN(temp))
            throw new Error('Informe um número')

        else
            throw new Error('Temperatura não identificada')
    
        setResp(msg)
        
    }



    return(
        <main>
            <h3>Informa qual sua temperatura:</h3>
            <input value={temperatura} onChange={e => setTemperatura(e.target.value)} />

            <br/>
            
            <button onClick={() => chetemp(temperatura)}>Checar</button>

            <br/>

            <p>Voce está: {resp}</p>


        </main>

    )


}