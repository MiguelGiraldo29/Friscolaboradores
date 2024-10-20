
import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { OrderProvider } from './contexto/OrderContext';
import InicioPage from './pages/Inicio';
import Formulario from './pages/formulario';
import Login from './pages/login';

function App() {
  return (

    <div className="App">
      <OrderProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Inicio' element={<InicioPage />} />
          <Route path='/formulario' element={<Formulario />} />
        </Routes>
      </BrowserRouter>
      </OrderProvider>
    </div>

  );
}

export default App;
