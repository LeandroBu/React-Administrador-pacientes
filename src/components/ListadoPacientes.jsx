import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente ,eliminarPaciente}) => {

  return (
    <div className="w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? 
      (
        <>
          <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">
              {" "}
              Pacientes y Citas
            </span>
          </p>

          {/* esta es la forma de iterar en vez de un foreach */}

          {pacientes.map((variableLocal) => (
            <Paciente 
              key={variableLocal.id} 
              paciente={variableLocal}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente} />
          ))}
        </>
      ) 
      : 
      (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{""}
            <span className="text-indigo-600 font-bold">
              {" "}
              y apareceran aqui
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
