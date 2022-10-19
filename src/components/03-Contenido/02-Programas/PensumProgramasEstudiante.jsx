import React, { useEffect, useState } from 'react'
const PensumProgramasEstudiante = ({ estudiante, autenticacion, codPlan, estadoCarga, setMateriasSemestre, infoSemestre, setInfoSemestre, }) => {

    useEffect(() => {
        consultarPensum()
    }, [codPlan])
    const consultarPensum = async () => {
        try {
            if (codPlan.length === 0) {
                console.log('Seleccione un programa')
                return
            }
            estadoCarga(1)
            let headersPensum = new Headers();
            headersPensum.append("Authorization", `Bearer ${autenticacion}`);
            let requestOptionsPensum = {
                method: 'GET',
                headers: headersPensum,
                redirect: 'follow'
            };
            let dataPensum = await fetch(`https://guiaacademicabackend.azurewebsites.net/api/planEstudio?correo=${estudiante}&planEstudio=${codPlan}`, requestOptionsPensum)
            let resDataPensum = await dataPensum.json()
            setInfoSemestre(resDataPensum.data[0].semestres)
        } catch (error) {
            console.log(error)
        } finally {
            estadoCarga(0)
        }
    }
    return (
        <div className='w-full'>
            <div>
                <form>
                    {
                        infoSemestre.map((semestres, index) => {
                            let { periodo, semestreCursado, tipoSemestre, creditos } = semestres
                            if (tipoSemestre !== 'Por cursar') {
                                return (
                                    <div key={index} className='relative'>
                                        <input
                                            type="radio"
                                            className="absolute right-0"
                                            name="options-outlined"
                                            id={`${periodo}-${index}`}
                                            autoComplete="off"
                                            onClick={() => {
                                                setMateriasSemestre(index)
                                            }}
                                        />
                                        <label
                                            className="w-full block p-1 mb-2 border bg-white w-full"
                                            htmlFor={`${periodo}-${index}`}
                                        >
                                            {periodo}
                                            <br />
                                            <span className='text-blue-500'>semestre cursado: {semestreCursado}</span>
                                            <br />
                                            {tipoSemestre}
                                            <br />
                                            {creditos}
                                        </label>
                                    </div>
                                )
                            }
                        })
                    }
                </form>
            </div>
        </div>
    )
}
export default PensumProgramasEstudiante