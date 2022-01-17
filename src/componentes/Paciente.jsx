const Paciente = ({ paciente,setPaciente,eliminarPaciente }) => {
   const click_elmininar=()=>{
        const resp=confirm("Deseas eliminar el paciente 'Sólo del sistema literalmente no lo puedes matar ;)'?")    
        if(resp){
            eliminarPaciente(paciente.id);
        }
    }
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:{" "}
                <span className="font-normal normal-case">{paciente.nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Dueño:{" "}
                <span className="font-normal normal-case">{paciente.dueño}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Teléfono:{" "}
                <span className="font-normal normal-case">{paciente.telefono}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Correo:{" "}
                <span className="font-normal normal-case">{paciente.correo}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha alta:{" "}
                <span className="font-normal normal-case">{paciente.fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                sintómas:{" "}
                <span className="font-normal normal-case">
                    {paciente.sintomas}
                </span>
            </p>
            <div className="flex justify-between mt-3">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-800 hover: bg-indigo-600 text-white font-bold uppercase rounded"
                    onClick={()=>setPaciente(paciente)}
                    >
                    Editar
                </button>
                <button
                  className="py-2 px-10 bg-red-800 hover: bg-red-600 text-white font-bold uppercase rounded"
                    type="button"
                    onClick={click_elmininar}
                    >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Paciente;