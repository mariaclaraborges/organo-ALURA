// Importação de componentes
import Banner from './componentes/Banner'; 
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {
 //lista de objetos
  const times= [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX/UI',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]); //...colaboradores = copia o array de colaboradores
    //colaborador: novo colaborador que foi adicionado no props.aoColaboradorCadastrado
  }

  return (
    <div className="App">
      <Banner />
    {/*Elevação de estado: transformar uma lista de objetos em uma lista de strings só com os nomes desses objetos*/}      
      <Formulario 
        nomeTimes = {times.map(time => time.nome)}

        aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}

      <Rodape />

    </div>
  );
}

export default App;
