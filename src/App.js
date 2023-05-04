import './App.css';
import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'
import { useEffect, useState } from 'react';
import Cadastro from './Pages/Cadastro';
import Perfis from './Pages/Perfis';
import Perfil from './Pages/Perfil';




const  caesMain = [{
  id: 0,
  nome: 'EVA',
  sexo: 'Fêmea',
  descricao: 'Eva , porte médio ,castrada e vacinada',
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_6.jpeg?raw=true'
},
{
  id: 1,
  nome: 'EDGAR',
  sexo: 'Macho',
  descricao: 'Edgar , porte médio, castrado e vacinado.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_8.jpeg?raw=true'
},
{
  id: 2,
  nome: 'GINA',
  sexo: 'Fêmea',
  descricao:'Gina, porte médio, castrada e vacinada.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_9.jpeg?raw=true'
},
{
  id: 3,
  nome: 'HELENA',
  sexo: 'Fêmea',
  descricao: 'Helena, pequeno porte, castrada e vacinada.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_3.jpeg?raw=true'
},
{
  id: 4,
  nome: 'OREO',
  sexo: 'Macho',
  descricao: 'Oreo, pequeno porte, castrado e vacinado.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_1.jpeg?raw=true'
},
{
  id: 5,
  nome: 'NESCAU',
  sexo: 'Macho',
  descricao: 'Nescau, pequeno porte, castrado e vacinado.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_2.jpeg?raw=true'
},

{
  id: 6,
  nome: 'JASMIN',
  sexo: 'Fêmea',
  descricao: 'Jasmin é de porte médio castrada e vacinada e está disponível para adoção.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_4.jpeg?raw=true'
},

{
  id: 7,
  nome: 'BENTO',
  sexo: 'Macho',
  descricao: 'Bento é um filhotão de porte grande. Um docinho que só tem tamanho.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_10.jpeg?raw=true'
},

{
  id: 8,
  nome: 'GEÓRGIA',
  sexo: 'Fêmea',
  descricao: 'Essa fofura é a Geórgia de porte grande, super dócil e ama brincar. É castrada e vacinada.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_13.jpg?raw=true'
},

{
  id: 9,
  nome: 'MEG',
  sexo: 'Fêmea',
  descricao: 'Meg , porte grande, castrada e vacinada. ' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_12.jpg?raw=true'
},

{
  id: 10,
  nome: 'NEVE',
  sexo: 'Fêmea',
  descricao: 'Neve, porte médio, castrada e vacinada.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_7.jpeg?raw=true'
},

{
  id: 11,
  nome: 'CHORONA',
  sexo: 'Fêmea',
  descricao: 'Chorona porte médio, castrada e vacinada.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_11.jpg?raw=true'
},

]

const  caesPerfis = [{
id: 0,
nome: 'Apollo',
idade: '1 ano e 6 meses',
sexo: 'Macho',
raça: 'Collie',
descricao:'Oii, me chamo Apollo tenho um ano e seis meses. Sou macho, extrovertido e procuro uma namorada da mesma raça que eu para termos filhotinhos lindos.Obs: Só aceito namoradas aprovadas pela minha mãe Interessadas por favor deixar um latido nos comentários.',
imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_14.jpg?raw=true'
},


]


function App() {

  const [Conta, setConta] = useState([])
  const [perfilLogado, setPefilLogado] = useState([])


  

  const cadastrarContas = (conta) =>{
    setConta([...Conta, conta])
  }

  return (
    <Routes>
      <Route path="/" element={<Main caes={caesMain}/>}/>
      <Route path='/Login' element={<Login  contas={Conta}/>} />
      <Route path='/Cadastro' element={<Cadastro contas = {valor => cadastrarContas(valor)}/>}/>
      <Route path='/Perfis' element={<Perfis  caes={caesPerfis}/>}/>
      {caesPerfis.map(cao => <Route key ={cao} path={`/Perfil/${cao.nome}`} element={<Perfil  imagem = {cao.imagem}  descricao = {cao.descricao}  />}/>)}
      {Conta.logado === true && <Route path='/MeuPerfil' element={<Perfil/>}/>}
    </Routes>
  );
}

export default App;
