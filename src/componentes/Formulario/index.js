import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';


const Formulario = (props) =>{

    /*o useState retorna um array com duas posições, a primeira é o valor da variável para ler e a segunda é uma função que altera o valor da variável(um setter)*/
    /*O React renderiza a interface toda vez que as variáveis dentro dele mudarem: deve-se avisar o react quais váriaveis devem ser monitoradas para renderizar novamente e atualizar a interface.
    Não tem como atualizar diretamente pela interface. A atualização ocorre a partir de uma mudança nos dados do componente.*/

    //controlando os estados:
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault(); //previne o comportamento padrão do formulário
        props.aoColaboradorCadastrado({
            nome: nome, //vai criar uma prop chamada "nome" e vai receber o valor de nome
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        // console.log('Form foi submetido => ', nome, cargo, imagem, time);
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    label="Time" 
                    itens={props.nomeTimes} 
                    obrigatorio={true}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;