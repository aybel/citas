import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"
import { useState, useEffect } from "react"


function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const eliminarPaciente = (id) => {
    console.log("eliminar paciente", id);
    //eliminando del estado de pacientes
    const pacientesActualizado = pacientes.filter(elemento => elemento.id !== id);
    setPacientes(pacientesActualizado);
  }

  //Revisamos si hay algo en localStorage
  useEffect(() => {
    const localPacientes = localStorage.getItem('pacientes') ?? [];
    console.log(localPacientes);
    setPacientes(JSON.parse(localPacientes));
  }, [])

  //almacenando en local storage
  useEffect(() => {
    console.log("componente listo o cambio pacientes");

    //Agregamos todo el json a localStorage
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);




  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}

        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
