import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return(
        <div className='lista-suspensa'>
            <label>
                {props.label}
            </label>
            <select onChange={aoDigitado} required={props.obrigatorio} value={props.valor}>
                <option value=''>Selecione</option>
                {/*O map vai aparecer sempre que tiver uma iteração em cima de uma lista*/}
                {props.itens.map((item) => {
                    return <option key={item}>{item}</option> //cada item da lista(cada option) deve ter uma chave única
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa