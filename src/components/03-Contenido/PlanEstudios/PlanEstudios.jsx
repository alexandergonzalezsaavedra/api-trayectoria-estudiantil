import React from 'react'
import Programas from '../Programas/Programas'
import Semestres from '../Programas/Semestres'

const PlanEstudios = (
    {
        estadoCarga,
        autenticacion,
        estudiante,
        resProgramas,
        setResProgramas,
        programasEstudiante,
        setProgramasEstudiante,
        resSemestres,
        setResSemestres
    }
) => {
    let { nombreCompleto, datosAcademicos, nivelEstudio, codPeriodo } = resProgramas

    return (
        <>
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
            <Programas
                estadoCarga={estadoCarga}
                autenticacion={autenticacion}
                estudiante={estudiante}
                setResProgramas={setResProgramas}
                setProgramasEstudiante={setProgramasEstudiante}
            />
            <Semestres
                estadoCarga={estadoCarga}
                autenticacion={autenticacion}
                resProgramas={resProgramas}
                programasEstudiante={programasEstudiante}
                setResSemestres={setResSemestres}
            />
        </>
    )
}

export default PlanEstudios
