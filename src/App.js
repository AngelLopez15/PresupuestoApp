import React,{useState, useEffect}  from 'react';
import { Pregunta } from './components/Pregunta';
import { Formulario } from './components/Formulario';
import {Listado} from './components/Listado'
import {ControlPresupuesto} from './components/ControlPresupuesto'


function App() {
  // estado para definir el presupuesto
  const [presupuesto, setPresupuesto] = useState(0)

  // estado para ir viendo el restante del dineor
  const [restante, setRestante] = useState(0)

  // State para hacer la carga condicional de componentes(mostar uno u otro componenete)
  const [mostarpregunta, setPregunta] = useState(true)

  // State para agregar gastos
  const [gastos, setGastos] = useState([])

  // State para hook de use effect y poder poner los gastos en pantalla
  const [gasto, setGasto] = useState({})

  // 
  const [crearGasto, setCrearGasto] = useState(false)

  // useEffect que actualiza el restante
  useEffect(()=>{
    if(crearGasto){
      setGastos([...gastos,gasto])
      //Resta del presupuesto 
      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante )
      // Resetear a false
      setCrearGasto(false)
    }
    // las dependencias son todas las variables que esta ocupando el useEffect
  },[gasto,gastos,crearGasto,restante])

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
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />
                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
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
