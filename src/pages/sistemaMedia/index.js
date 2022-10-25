import { useEffect, useState } from 'react'
import './index.scss'

export default function Index() {
const [ qtdalunos ,setqtdalunos] = useState(0);
const [caixas , setcaixas] = useState([]);
const [valores, setValores] = useState([0]);
const [inputs, setInputs] = useState([]);
const [media, setmedia] =useState(0)
const [total , settotal]=useState(0)

    function contar(){
        let b = []
        for (let i = 1; i <= qtdalunos; i++) {
            b[i] = i
        }
        setcaixas(b);
        setInputs(b);
        
    }
    

    useEffect(() => {

        for (let i = 0; i < qtdalunos; i++) {
            settotal((total + inputs[i])/qtdalunos)
            console.log(inputs)
        }
        setmedia(total)
                

    },[inputs, media])





    return(
        <main className='sistem'>
            <section className='quadrado'>
                <h1>Sistema de média</h1>

                <div>
                    <input type='number' value={qtdalunos} onChange={e => setqtdalunos(e.target.value)}/>
                    <button onClick={contar}>Ok</button>
                </div> 

                
                        {caixas.map(item =>
                        <div className='card'>
                            <p>aluno:{item}</p>
                            {valores.map(item =>
                                <input type='number' value={valores[inputs[item]]} onChange={e => setInputs([Number(e.target.value)])}/>    
                            )}   
                        </div>                         
                        )}
                       
                        

                
                    

                <div>
                    <h1>Nota mais alta:</h1>
                    <br/>
                    <h1>Nota mais baixa:</h1>
                    <br/>
                    <h1>média da sala:</h1>
                    {media}
                </div>


            </section>
        </main>



    )

}