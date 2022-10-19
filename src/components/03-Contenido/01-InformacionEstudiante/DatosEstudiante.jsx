import React from 'react'

const DatosEstudiante = ({ resProgramas }) => {
    let { nombreCompleto, nivelEstudio, codPeriodo } = resProgramas
    return (
        <div className='flex justify-center text-center mt-10'>
            <div className='px-1 py-3 bg-slate-200 w-1/3'>
                Te damos la bienvenida
                <br />
                <strong>{nombreCompleto}</strong>
                <br />
                {nivelEstudio}
                <br />
                {codPeriodo}
            </div>
        </div>
    )
}

export default DatosEstudiante
