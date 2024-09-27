import { useState } from 'react'
import './index.scss'

import axios from 'axios'



export default function Consultar() {
    const [Cadastro, setCadastro] = useState([]);


    async function buscar() {
        const url = 'http://localhost:2008/cadastro';
        let resp = await axios.get(url);
        setCadastro(resp.data);
    }

    

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>

            <button onClick={buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Senha</th>
                    </tr>
                </thead>

                <tbody>
                    {Cadastro.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.senha}</td>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}