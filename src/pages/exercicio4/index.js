import { useState } from "react"


export default function Index() {
    const [sal, setSal] = useState('')
    const [bon, setBon] = useState('')
    const [desco, setDesco] = useState('')

    const [resp, setResp] = useState('');
    


    function salario(salario, bonus, desc){
        let b = salario - desc

        console.log(b)

        let c = b + (bonus * salario / 100)
        
        setResp(c)
    }

    return(
        <main>
            <h3>Salario:</h3>
            <input value={sal} onChange={e => setSal(e.target.value)} />
            <br/>

            <h3>Bonus em porcentagem:</h3>
            <input value={bon} onChange={e => setBon(e.target.value)} />
            <br/>

            <h3>Desconto em Reais:</h3>
            <input value={desco} onChange={e => setDesco(e.target.value)} />
            <br/>

            <p></p>
            <button onClick={() => salario(sal,bon,desco)}>calcular</button>

            <p>Valor:{resp}</p>

        </main>




    )


}