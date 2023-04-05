import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return(
        //Se a lista de colaboradores for maior que 0, então mostra o time
        //renderização condicional feita por meio do && 
        //return(JSK): não é possível colocar um if dentro do JSX
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: props.corSecundaria}}> {/*As chaves indicam que terá uma variável ali dentro*/}
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div></section>
    )
}

export default Time;