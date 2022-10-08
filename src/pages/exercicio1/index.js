import './index.scss'
import { useState } from 'react'


export default function Index (){
    const [qtdpeqv , setqtdpeq] = useState(0)
    const [qtdmedv , setqtdmed] = useState(0)
    const [qtdgrav , setqtdgra] = useState(0)
    const [descv , setdesc] = useState(0)
    const [vlfinal , setvlfinal] = useState(0)


function valorfinal (qtdpeq, qtdmed ,qtdgra , desc){
    try {
        Number(qtdpeq, qtdgra ,qtdmed ,desc)
        let a = (((qtdpeq*13.50)+(qtdmed*15)+(qtdgra*17.50))*desc)/100
        console.log(desc)
        setvlfinal('O VALOR FINAL É R$ '+a.toFixed(2))
    } catch (err) {
        console.log(err.message)
    }
}


    return(
        <main className='mae'>
            <div>
                EXERCICIO 1
            </div>
            <div>
                <input type='number' placeholder='quantidade de pequena' onChange={e => setqtdpeq(e.target.value)} />
                
                <input type='number' placeholder='quantidade de medio' onChange={e => setqtdmed(e.target.value)} />
                
                <input type='number' placeholder='quantidade de grande' onChange={e => setqtdgra(e.target.value)} />
                
                <input type='number' placeholder='Desconto' onChange={e => setdesc(e.target.value)}/>

                <button onClick={() => valorfinal(qtdpeqv,qtdmedv,qtdgrav,descv)}>calcular</button>

                <div>
                    <h1>VALOR TOTAL</h1>
                    {vlfinal}
                </div>

            </div>    

        </main>
    )
}