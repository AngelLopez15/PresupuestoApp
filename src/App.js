import React,{useState}  from 'react';
import { Pregunta } from './components/Pregunta';
import { Formulario } from './components/Formulario';
import {Listado} from './components/Listado'

function App() {
  // estado para definir el presupuesto
  const [presupuesto, setPresupuesto] = useState(0)

  // estado para ir viendo el restante del dineor
  const [restante, setRestante] = useState(0)

  // State para hacer la carga condicional de componentes(mostar uno u otro componenete)
  const [mostarpregunta, setPregunta] = useState(true)

  // State para agregar gastos
  const [gastos, setGastos] = useState([])

  // funcion para agregar un gasto nuevo
  const agregarNuevoGasto = gasto =>{
    setGastos([...gastos,gasto])
  }


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {/* Aqui hacemos la carga condicional con un operador ternario */}
          {mostarpregunta ?
            (
              <Pregunta 
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setPregunta={setPregunta}
              />
            ) :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  /> 
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
