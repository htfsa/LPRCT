import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import  Text from './components/Text/Text';
import { Title } from './components/Title/Title';


function App() {
  const nome = 'Herbert';
  return (
    <>
      <Navbar />
      <Title nome={nome}/>
      <Text />
     
    </>
  );
}

export default App  ;

