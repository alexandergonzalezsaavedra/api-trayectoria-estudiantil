import { useEffect } from "react"

const Programas = ({ estadoCarga, autenticacion, estudiante, setResProgramas, setProgramasEstudiante }) => {
    useEffect(() => {
        datosProgramas()
    }, [autenticacion])
    const datosProgramas = async () => {
        try {
            if (autenticacion.length === 0) {
                console.log('usuario no autenticado')
                return
            }
            estadoCarga(1)

            var headersProgramas = new Headers();
            headersProgramas.append("Authorization", `Bearer ${autenticacion}`);

            var requestOptionsProgramas = {
                method: 'GET',
                headers: headersProgramas,
                redirect: 'follow'
            };

            const dataPromagramas = await fetch(`https://guiaacademicabackend.azurewebsites.net/api/estudiante?correo=${estudiante}`, requestOptionsProgramas)
            const resDataPromagramas = await dataPromagramas.json()
            setResProgramas(resDataPromagramas.data[0])
            setProgramasEstudiante(resDataPromagramas.data[0].datosAcademicos)
        } catch (error) {
        } finally {
            estadoCarga(0)
        }
        return (
            <>
            </>
        )
    }
}
export default Programas
