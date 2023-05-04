import './FormComentario.css'
import Input from '../Input'
import { useState } from 'react'



const FormComentario = (props) => {
    const [comentario, setComentario] = useState('')
    const [id, setId] = useState(0)
    const nome = ''

    const enviarComentario = (evento) => {
        evento.preventDefault()

        setId(id + 1)

        props.comentario
            (
                {
                    id,
                    nome,
                    comentario
                }
            )
        setComentario('')
    }


    return (
        <>  <div className='comentario'>
            <form onSubmit={enviarComentario}>
                <Input
                    type="text"
                    placeholder="Escreva um comentário..."
                    enviar={valor => setComentario(valor)}
                    valor={comentario}
                />
            </form>
        </div>
        </>
    )
}


export default FormComentario