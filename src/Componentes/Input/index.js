import './Input.css'

const Input = (props) =>{

    const aoEnviar = (evento) =>{
        props.enviar(evento.target.value)
    }

    return(
        <div className='input'>
            <label htmlFor = 'input'>{props.label}</label>
            {props.label !== 'Sexo' && <input name ='input' onChange={aoEnviar} type={props.type} placeholder={props.placeholder} value = {props.valor} />}
            {
                props.label === 'Sexo' && 
                <select onChange={aoEnviar}>
                    <option value='M'>M</option>
                    <option value='F'>F</option>
                </select>}
        </div>
        
    )
}

export default Input