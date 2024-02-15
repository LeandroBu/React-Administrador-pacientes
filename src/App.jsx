import { useEffect } from 'react'
import {useState} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  // Todo lo que se escriba antes del return es codigo JS
  const[pacientes, setPancientes] = useState([])
  const[paciente, setPaciente] = useState({})

  //de esdta manera obtengo lo que esta en ls antes de que cargue toda la info
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPancientes(pacientesLS)
    }
    obtenerLS();
  }, [])

  //De esta manera guardo en el local storage
  useEffect(() => {
    //Solamento guarda strings, asique serializo en este caso la lista
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPancientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 flex">
        <Formulario
          pacientes={pacientes}
          setPancientes={setPancientes}
          paciente={paciente}
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
