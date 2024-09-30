import { useState } from 'react'
import './index.scss'

import axios from 'axios'

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    


    async function salvar() {
        const paramCorpo = {
            "email": email,
            "senha": senha,
            }

        const url = 'http://localhost:2008/cadastro/';
        let resp = await axios.post(url, paramCorpo);

        alert('Pessoa adicionada ao alert. Id: ' + resp.data.novoId);
    }


    return (
        <div className='pagina-cadastrar'>
            <h1> CADASTRAR </h1>


            <div className='form'>
                <div>
                    <label>email:</label>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type='text' value={senha} onChange={e => setSenha(e.target.value)}/>
                </div>
                
            </div>
            <button onClick={salvar}> ENVIAR </button>

        </div>
    )
}