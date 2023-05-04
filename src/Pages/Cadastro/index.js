import { useState } from 'react'
import Footer from '../../Componentes/Footer'
import Header from '../../Componentes/Header'
import FormCadastro from '../../Componentes/Formulario/FormCadastro'
import './Cadastro.css'





const Cadastro = (props) =>{

    
    const logado = false

    const Cadastrado = (conta) => {
        console.log(conta)
        props.contas(conta)
        localStorage.setItem('Usuario',JSON.stringify(conta))
    }


    return(
        <>
            <Header estaLogado={logado}/>
            <FormCadastro aoCadastrar = {conta => Cadastrado(conta)}/>
            <Footer/>
        </>
    )
}

export default Cadastro