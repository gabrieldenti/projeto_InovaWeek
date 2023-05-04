import './Caes.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'





const Caes = (props) => {


    return (
        <div className='perfis'>
            <div className='caesperfis'>
                <nav>
                    <Link to={`/Perfil/${props.nome}`}><img src={props.imagem} alt='Foto-de-Perfil' /></Link>
                    <p>Nome: {props.nome}</p>
                    <p>Idade: {props.idade}</p>
                    <p>Sexo: {props.sexo}</p>
                    <p>Raça: {props.raça}</p>
                </nav>
            </div>
        </div>
    )
}


export default Caes