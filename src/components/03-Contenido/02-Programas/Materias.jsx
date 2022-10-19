import React, { useEffect, useState } from 'react'

const Materias = ({ materiasSemestre, infoSemestre }) => {


    const [asignaturasPeriodo, setAsignaturasPeriodo] = useState([])

    useEffect(() => {
        setAsignaturasPeriodo(infoSemestre[materiasSemestre])
    }, [materiasSemestre])

    // console.log(materiasSemestre)
    // console.log(asignaturasPeriodo)


    let pintarMateria

    try {
        pintarMateria = asignaturasPeriodo.asignaturas.map((item, index) => {
            let { area, codigo, creditos, nombre, nota, status, tipo } = item
            return (
                <div key={index} className='w-full border bg-blue-100 p-2'>
                    <p>
                        {area}
                    </p>
                    <p>
                        {codigo}
                    </p>
                    <p>
                        {creditos}
                    </p>
                    <p>
                        {nombre}
                    </p>
                    <p>
                        {nota}
                    </p>
                    <p>
                        {status}
                    </p>
                    <p>
                        {tipo}
                    </p>
                </div>
            )
        })
    } catch (error) {

    }


    return (
        <div className='grid grid-cols-3 gap-4'>
            {pintarMateria}
        </div>
    )
}

export default Materias
