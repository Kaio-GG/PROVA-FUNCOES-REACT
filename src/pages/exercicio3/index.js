import { useState } from 'react'
import './index.scss'

export default function Index() {

    const [gramas, setGramas] = useState(0)
    const [resp, setResp] = useState(0)

    function calcular(gramas){
        let oneG = 0.035;

        if(gramas >= 1000 )
            oneG = 0.030

        console.log(gramas)

        setResp(gramas * oneG)
    }


    return(

            <main>
                <h1>Insira quantas gramas de açaí você quer:</h1>

                <input value={gramas} onChange={e => setGramas(e.target.value) }/>

                <button onClick={() => calcular(gramas)}>calcular</button>

                <p>{resp}</p>

            </main>

    )





}