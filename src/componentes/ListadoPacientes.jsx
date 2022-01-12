
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-5 text-center">Administra tus {""}
                <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
            </p>
            {
                pacientes.length > 0
                    ?
                    pacientes.map((elemento, index) => (
                        <Paciente 
                            key={elemento.id} 
                            paciente={elemento} 
                            setPaciente={setPaciente}
                         />
                    ))
                    :
                    <div className="
                        mb-5
                        bg-yellow-200
                        text-gray-400 
                        text-center 
                        font-bold 
                        rounded  
                        p-3
                        ">
                        <p>No tenemos pacientes!!!! {" "} ;( </p>
                    </div>
            }

        </div>
    );
}

export default ListadoPacientes;