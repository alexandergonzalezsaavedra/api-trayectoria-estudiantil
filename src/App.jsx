import { useState } from "react";
import Cargando from "./assets/img/cargando/Cargando";
import Header from "./components/01-Cabecera/Header";
import Formulario from "./components/02-Formulario/Formulario";
import PlanEstudios from "./components/03-Contenido/PlanEstudios/PlanEstudios";

function App() {
  const [cargando, estadoCarga] = useState(0)
  const [estudiante, establecerEstudiante] = useState('')
  const [autenticacion, establecerAutenticacion] = useState('')
  const [resProgramas, setResProgramas] = useState([])
  const [programasEstudiante, setProgramasEstudiante] = useState([])
  const [resSemestres, setResSemestres] = useState([])
  console.log(programasEstudiante)
  return (
    <>
      <Cargando
        cargando={cargando}
      />
      <Formulario
        estadoCarga={estadoCarga}
        establecerEstudiante={establecerEstudiante}
        estudiante={estudiante}
        establecerAutenticacion={establecerAutenticacion}
        autenticacion={autenticacion}
      />
      {
        (() => {
          if (autenticacion.length !== 0) {
            return (
              <PlanEstudios
                estadoCarga={estadoCarga}
                estudiante={estudiante}
                autenticacion={autenticacion}
                resProgramas={resProgramas}
                setResProgramas={setResProgramas}
                programasEstudiante={programasEstudiante}
                setProgramasEstudiante={setProgramasEstudiante}
                resSemestres={resSemestres}
                setResSemestres={setResSemestres}
              />
            )
          }
        })()
      }

    </>
  );
}

export default App;