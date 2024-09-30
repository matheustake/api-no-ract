import './index.scss';
import { Link } from 'react-router-dom';



export default function Inicio(){

return(

        <div className='inicio'>

                <h1>SEJA BEM VINDO AO CADASTRO</h1>

                <Link to='/Cadastro'> <h1>Cadastro</h1> </Link>
                <Link to='/Tabelacadastro'> <h1>Tabela</h1> </Link>
        </div>



)




}