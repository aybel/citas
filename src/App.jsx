import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"
import { useState, useEffect } from "react"


function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente,setPaciente]=useState({});
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App
