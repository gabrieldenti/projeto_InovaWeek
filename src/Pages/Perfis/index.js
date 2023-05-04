import Caes from '../../Componentes/Caes'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import './Perfis.css'

const Perfis = (props) =>{

    

    
    return(
        <div className='perfis'>
            <Header estaLogado = {true}/>
            {props.caes.map(cao => <Caes key = {cao.id} nome = {cao.nome} idade = {cao.idade} sexo ={cao.sexo} raça = {cao.raça} descricao = {cao.descricao} imagem = {cao.imagem} />)}
            <Footer/>
        </div>
    )
}

export default Perfis