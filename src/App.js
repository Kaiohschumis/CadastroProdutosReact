import './App.css';
import React from 'react';
import Navbar from './components/navbar'
import Routes from './rotas';


function App() {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Routes />
      </div>
    </>
  );
}

export default App;
