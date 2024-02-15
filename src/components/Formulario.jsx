import {useState, useEffect} from 'react'; //Asi se importa los hooks
import Error from './Error';

const Formulario = ({pacientes,setPancientes,paciente}) => {
  //Asi se declara el hook usestate nombre(Variable), setNombre(funcion que modifica la variable) useState('')(Valor inicial)
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  
  const [error, setError] = useState(false);

  // con este hook le indico que escriba por consola unicamente cuando lo que esta entre [] cambie
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
       setNombre(paciente.nombre)
       setPropietario(paciente.propietario)
       setEmail(paciente.email)
       setAlta(paciente.alta)
       setSintomas(paciente.sintomas)
    } 
    }, [paciente])

 
  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if([nombre,propietario,email,alta,sintomas].includes('')){
      console.log('Hay al menos un campo vacio')
      setError(true)
      return
    }
    
    setError(false)

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }

    if(paciente.id ){
      //Editando registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id
          === paciente.id ? objetoPaciente : pacienteState)

      setPancientes(pacientesActualizados)
    }
    else{
      //Objeto de paciente
      objetoPaciente.id = generarId()
      //De esta manera tomamos una copia del arreglo y le pasamos un nuevo con el objeto nuevo creado
      //los puntos y el arreglo se llama Spread Operation
      setPancientes([...pacientes, objetoPaciente])
    }

    //Reinicio el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }

  return (
    <div className="w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form onSubmit={handleSubmit}
       className="bg-white shadow-md rounded-lg py-10 px-5">
      
        {error && <Error><p>Debe llenar todos los campoa</p></Error>}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            // De esta manera utilizando la variable y la funcion
            // que la modifica hacemos que el usuario por medio de la interfaz
            // modifique la variable creada
            // la e, es el evento del onChange
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)} //Esto es un CallBack 
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="email propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={ (e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
          ></textarea>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
            value={paciente.id ? "Editar paciente": "Agregar paciente" }
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
