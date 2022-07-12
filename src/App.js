import React from 'react';
import './App.css';
import Tela1 from './componentes/tela1';
import Tela2 from './componentes/tela2';
import Tela3 from './componentes/tela3';
import Tela4 from './componentes/tela4';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tela1/>} exact/>
      <Route path="/cliente" element={<Tela2 />} />
      <Route path="/funcionario" element={<Tela3 />} />
      <Route path="/reserva" element={<Tela4 />} />
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
