import { useState } from 'react'
import Header from '../../Componentes/Header'
import './Perfil.css'
import FormComentario from '../../Componentes/FormComentario'
import Footer from '../../Componentes/Footer'






const Perfil = (props) => {



    const [Comentarios, setComentarios] = useState([])
    const json = localStorage.getItem('Usuario')
    const usuario = JSON.parse(json)




    const cadastrarComentario = (comentario) => {
        comentario.nome = usuario.nome
        setComentarios([...Comentarios, comentario])
    }

    console.log(Comentarios)

    return (
        <div>
            <Header  estaLogado={true}/>

            <div className='caesperfil'>
                <h1>Perfil</h1>
                <img src={props.imagem} alt='Foto de perfil' />
                <br/>
                <h3>Sobre Mim</h3>
                <p>{props.descricao}</p>
                <h3>Comentários:</h3>
                {Comentarios.map
                    (
                    comentario=>
                        <div key={comentario.id}>
                            <strong>{`${comentario.nome}:`}</strong>
                            <p>{comentario.comentario}</p>
                        </div>)}
                <FormComentario comentario={valor => cadastrarComentario(valor)} />
            </div>
            <Footer />
        </div>
        
    )
}


export default Perfil