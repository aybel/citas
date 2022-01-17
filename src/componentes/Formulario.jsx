import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import MsgError from "./MsgError";
const Formulario = ({ pacientes, setPacientes, paciente,setPaciente }) => {

    const [nombre, cambiaNombre] = useState('');
    const [dueño, cambiaDueño] = useState('');
    const [telefono, cambiaTelefono] = useState('');
    const [correo, cambiaCorreo] = useState('');
    const [fecha, cambiaFecha] = useState('');
    const [sintomas, cambiaSintomas] = useState('');
    const [error, cambiaError] = useState(false);

    useEffect(() => {
        //comprueba si el objeto esta vació
        if (Object.keys(paciente).length > 0) {
            cambiaNombre(paciente.nombre);
            cambiaDueño(paciente.dueño);
            cambiaTelefono(paciente.telefono);
            cambiaCorreo(paciente.correo);
            cambiaFecha(paciente.fecha);
            cambiaSintomas(paciente.sintomas);
        }
    }, [paciente]);


    const enviarFormulario = (e) => {
        e.preventDefault();
        //Validación del formulario
        if ([nombre, dueño, telefono, correo, fecha, sintomas].includes('')) {
            cambiaError(true);
            return;
        }
        cambiaError(false);
        //objeto de paciente
        const objetoPaciente = {
            nombre,
            dueño,
            telefono,
            correo,
            fecha,
            sintomas
        }
        if (paciente.id) {
            //editando
            //Buscar en el arreglo de pacientes y reemeplazar
            //Recorremos los pacientes
            //Agregamos el id del paciente al nuevo objeto
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(elemento => {
               return elemento.id == paciente.id ? objetoPaciente : elemento
            });
            //console.log(pacientesActualizados);
            setPacientes(pacientesActualizados);
            //Reniciamos el objeto donde se guarda el paciente a editar
            setPaciente({});
        } else {
            //nuevo registro
            objetoPaciente.id = uuidv4();
            setPacientes([...pacientes, objetoPaciente]);
        }

        //Reiniciar el formulario
        cambiaNombre("");
        cambiaDueño("");
        cambiaTelefono("");
        cambiaCorreo("");
        cambiaFecha("");
        cambiaSintomas("");
    }
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Formulario</h2>
            <p className="text-lg  mt-5 text-center mb-5">
                Añade pacientes y {""}
                <span className="text-indigo-700 font-bold">Administralos</span>
            </p>



            <form onSubmit={enviarFormulario} action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    {error && (
                        <MsgError mensaje={"Todos los campos son olbigatorios"} />
                    )}

                    <label
                        className="block text-gray-700 uppercase font-bold "
                        htmlFor="nombre">Nombre del bicho
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Nombre del bicho"
                        value={nombre}
                        onChange={(e) => cambiaNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold "
                        htmlFor="dueño">Dueño del bicho
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        type="text"
                        name="dueño"
                        id="dueño"
                        placeholder="Nombre del dueño"
                        value={dueño}
                        onChange={(e) => cambiaDueño(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold "
                        htmlFor="correo">Télefono
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        type="text"
                        name="telefono"
                        id="telefono"
                        value={telefono}
                        onChange={(e) => cambiaTelefono(e.target.value)}
                        placeholder="Télefono del dueño" />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold "
                        htmlFor="correo">Correo eléctrónico
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        type="email"
                        name="correo"
                        id="correo"
                        value={correo}
                        onChange={(e) => cambiaCorreo(e.target.value)}
                        placeholder="Correo eléctrónico del dueño" />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold "
                        htmlFor="alta">Alta
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        type="date"
                        name="alta"
                        id="alta"
                        value={fecha}
                        onChange={(e) => cambiaFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold "
                        htmlFor="sintomas">¿Qué dice el bicho que siente?
                    </label>
                    <textarea
                        className="border-2 w-full placeholder-gray-600 rounded-md p-2 mt-2"
                        name="sintomas"
                        id="sintomas"
                        value={sintomas}
                        onChange={(e) => cambiaSintomas(e.target.value)}
                        placeholder="Cuentanos que dice que le pasa."
                    >

                    </textarea>
                </div>
                <input
                    type="submit"
                    value={paciente.id ? 'Editar bicho' : 'Agregar bicho'}
                    className="
                            bg-indigo-500 
                            w-full p-3 
                            text-white uppercase 
                            font-bold hover:bg-indigo-700 
                            cursor-pointer 
                            transition-colors
                    "
                />
            </form>
        </div>
    );
}

export default Formulario;