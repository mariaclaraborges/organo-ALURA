import './Botao.css'

const Botao = (props) =>{
    return (
        <button className='botao'>
            {props.children}  {/*children é o conteúdo que está dentro do componente */}
        </button>
    )
}

export default Botao 