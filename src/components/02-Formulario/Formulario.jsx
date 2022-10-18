import Swal from 'sweetalert2'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Endpoints from '../00-Endpoint/Endpoints/Endpoints'
import './Formulario.Modulo.scss'

const Formulario = ({ estadoCarga, estudiante, establecerEstudiante, establecerAutenticacion, autenticacion }) => {
    let [vFormulario, setVformulario] = useState()
    const initialState = { correo: '' }
    const [campo, establecerCampo] = useState(initialState)
    const { correo } = campo
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target
        establecerCampo((old) => ({
            ...old,
            [name]: type === 'checkbox' ? checked : value
        }))
        //console.log(correo)
    }
    const restar = () => {
        establecerCampo(initialState)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!correo.trim()) {
            Swal.fire({
                title: '¡Error!',
                text: 'Ingrese un usuario valido',
                icon: 'error',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#dc2626',
            })
            console.log('ingrese un usuario valido')
            return
        }
        establecerEstudiante(correo.trim())
        restar()
    }
    //console.log(autenticacion)
    return (
        <>
            <div id="formularioIngreso" className={`flex items-center ${vFormulario}`}>

                <div className="container mx-auto">
                    <div className="container mx-auto mb-3 py-5 w-full">
                        <h3 className="text-3xl font-bold text-center text-white shadow-sm">
                            Ingreso
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit} className='flex justify-center gap-2'>
                        <input
                            className='border border-gray-300 rounded p-2 w-1/3'
                            type="email"
                            name='correo'
                            value={correo}
                            onChange={handleChange}
                        />
                        <button
                            type='submit'
                            className='p-2 text-white bg-blue-700 hover:bg-blue-500 transition-all duration-300'>
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>

            <Endpoints
                estadoCarga={estadoCarga}
                estudiante={estudiante}
                establecerAutenticacion={establecerAutenticacion}
                setVformulario={setVformulario}
            />
        </>
    )
}

export default Formulario
