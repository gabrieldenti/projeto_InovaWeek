import './Footer.css'



const Footer = () => {
    return (
    <div className='footer'>
        <footer className='contatos'>
            <div className='email'>
                <big><b>Parcerias</b></big>
                <br/>
                <strong><img src='https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/email.png?raw=true' alt='E-mail: '></img></strong>
                <small>petmatch@hotmail.com</small>
            </div>
            <div className='contato'>
                <big><b>Dúvidas</b></big>
                <br/>
                <strong><img src='https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/duvida.png?raw=true' alt='Telefone: '></img></strong>
                <small>(27) 4567-8901</small>
            </div>
            <div className='doacao'>
                <big><b>Doações</b></big>
                <br/>
                <strong><img src='https://raw.githubusercontent.com/Drakemaner/Site-Enzo/main/public/fotos/telefone.png' alt='Pagamentos: '></img></strong>
                <small>Pix: (27) 4567-8901 ou Picpay: PETMATCH</small>
            </div>
            <div className='info'>
                <big><b>Quem somos</b></big>
                <br/>
                <strong><img src='https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/exclamacao.png?raw=true' alt='Site: '></img></strong>
                <small>www.petmatch.com.br</small>
            </div>
        </footer>
    </div>
    )
}


export default Footer