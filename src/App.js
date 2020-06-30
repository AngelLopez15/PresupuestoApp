import React,{useState}  from 'react';
import { Pregunta } from './components/Pregunta';
import { Formulario } from './components/Formulario';

function App() {
  // estado para definir el presupuesto
  const [presupuesto, setPresupuesto] = useState(0)

  // estado para ir viendo el restante del dineor
  const [restante, setRestante] = useState(0)


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta 
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
          />
          <div className="row">
            <div className="one-half column">
              <Formulario />
            </div>
            <div className="one-half column">
              2  
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
