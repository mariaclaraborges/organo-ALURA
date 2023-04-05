import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='rodape'>
            <div className='social'>
                <img src='/imagens/fb.png' alt='Facebook'/>
                <img src='/imagens/tw.png' alt='Twitter'/>
                <img src='/imagens/ig.png' alt='Instagram'/>
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png' alt='Logo Organo'/>
            </div>
            <div className='text'>
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}

export default Rodape