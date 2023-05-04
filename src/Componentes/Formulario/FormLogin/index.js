import { useState } from 'react'
import Input from '../../Input'
import './Formulario.css'
import { Link } from 'react-router-dom'

const FormLogin = (props) => {


    const [email,setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const login = () => {
        props.aoLogar({
            email,
            senha
        }  
        )
        setEmail('')
        setSenha('')
    }

    return(
        <div className='form-login'>

            <form onSubmit={login}>
                <h3>Acesse sua conta</h3>
                <Input
                    label ='E-mail'
                    type = 'text'
                    placeholder = 'Digite seu E-mail'
                    enviar = {valor => setEmail(valor)}
                    valor = {email}
                />
                <Input
                    label ='Senha'
                    type = 'password'
                    placeholder = 'Digite sua Senha'
                    enviar = {valor => setSenha(valor)}
                    valor = {senha}
                />
                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
}

export default FormLogin