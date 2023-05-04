import { useEffect, useState } from 'react'
import Footer from '../../Componentes/Footer'
import Header from '../../Componentes/Header'
import Login from '../Login'
import Mapa from '../../Componentes/Mapa'
import './Main.css'


const Main = (props) => {

    const anuncio_1 = 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/anuncios/Anuncio_1.jpeg?raw=true'
    const anuncio_2 = 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/anuncios/Anuncio_2.jpeg?raw=true'




    return (
        <div className='main'>
            <Header />
            <Mapa/>
            <div className='adoção'>
                <hr></hr>
                <h1> Aumigos para adoção por perto </h1>
                {props.caes.map
                (caomain =>
                    <div key={caomain.id} className='caesmain'>
                        <img src={caomain.imagem} alt='' />
                        <h2>{caomain.nome}</h2>
                        <big>{caomain.sexo}</big>
                        <p>{caomain.descricao}</p>
                    </div>
                )}
                <hr></hr>
                <h1><strong>Parceiros</strong></h1>
                <div className='parceiros'>
                    <img src = {anuncio_1} alt = ''/> 
                    <img src = {anuncio_2} alt = ''/> 
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Main