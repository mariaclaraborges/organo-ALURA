import './CampoTexto.css';


const CampoTexto = (props) =>{

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }


    return(
        <div className='campo-texto'>
            <label>
                {props.label}
            </label> 
            <input onChange={aoDigitado} type="text" placeholder={placeholderModificada} required={props.obrigatorio} 
            value={props.valor}/>
        </div>
    )
}

export default CampoTexto;