
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import './Login.css'
import { useState } from 'react'
import FormLogin from '../../Componentes/Formulario/FormLogin'

const Login = (props) =>{
    const [logado, setLogado] = useState(false)
    const [perfil, setPerfil] = useState([])
    const [texto, setTexto] = useState('')
    const [classe, setClasse] = useState('Hidden')
    const json = localStorage.getItem('Usuario')
    const usuario = JSON.parse(json)


    const Logado = (conta) => {
        console.log(conta)
        setPerfil(conta)
        
            console.log(usuario)
            
            
            if(usuario.email === conta.email && usuario.senha === conta.senha){
                console.log('Opaa')
                localStorage.setItem('Logado', true)
                setTexto('Você se Logou com Sucesso')
                setClasse('Sucesso')
            }
            else if(conta.email === '' || conta.senha === ''){
                setTexto('Campo de E-mail ou Senha vazios')
                setClasse('Aviso')
            }
            else if(conta.email !== '' || conta.senha !== ''){
                setTexto('E-mail ou Senha Inválidos')
                console.log('Sexo')
                setClasse('Aviso')
            }
    }

    return(
        <div>
            <Header/>
            <FormLogin
              aoLogar={conta => Logado(conta)}  
            />
            <p className={classe}>{texto}</p>
            <Footer />
        </div>
    )
}


export default Login