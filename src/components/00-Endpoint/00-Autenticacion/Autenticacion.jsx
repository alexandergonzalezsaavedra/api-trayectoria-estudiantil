import Swal from 'sweetalert2'
import { useEffect } from "react";
export default ({ estadoCarga, estudiante, establecerAutenticacion, setVformulario }) => {
    useEffect(() => {
        dataToken(estudiante)
    }, [estudiante])

    const headerToken = new Headers();
    headerToken.append("Authorization", "Basic YXBpUmVzdENsaWVudElkOlhZN2ttem9OemwxMDA=");
    const requestOptionsToken = {
        method: 'POST',
        headers: headerToken,
        redirect: 'follow'
    };
    const dataToken = async (estudiante) => {
        try {
            if (estudiante.length === 0) {
                estadoCarga(0)
                return
            }
            estadoCarga(1)
            const data = await fetch(`https://guiaacademicabackend.azurewebsites.net/oauth/token?grant_type=password&username=${estudiante}&password=password`, requestOptionsToken)
            const resData = await data.json()

            if (data.status === 401) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cerrar',
                    confirmButtonColor: '#dc2626',
                })
            }
            else if (!resData.ok) {
                establecerAutenticacion(resData.access_token)
                setVformulario('hidden')
            } else {
                establecerAutenticacion('')
                Swal.fire({
                    title: '¡Error!',
                    text: 'Ingrese un usuario valido',
                    icon: 'error',
                    confirmButtonText: 'Cerrar',
                    confirmButtonColor: '#dc2626',
                })
            }
        } catch (error) {
            Swal.fire({
                title: '¡Error!',
                text: 'Ingrese un usuario valido',
                icon: 'error',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#dc2626',
            })
        } finally {
            estadoCarga(0)
        }
    }
    return (
        <>
        </>
    );
};
