import Autenticacion from "../00-Autenticacion/Autenticacion";

export default ({ estadoCarga, estudiante, establecerAutenticacion, setVformulario }) => {
    return (
        <>
            <Autenticacion
                estadoCarga={estadoCarga}
                establecerAutenticacion={establecerAutenticacion}
                estudiante={estudiante}
                setVformulario={setVformulario}
            />
        </>
    );
};
