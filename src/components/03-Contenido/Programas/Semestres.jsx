import React from 'react'

const Semestres = ({ estadoCarga, autenticacion, estudiante, resProgramas, setResProgramas, setResSemestres, programasEstudiante }) => {

    console.log(programasEstudiante)
    return (
        <div className="container mx-auto">
            <h1 className='text-blue-600 text-lg my-5'>
                Programas
            </h1>
            <div className='grid grid-cols-2 gap-4'>
                {
                    programasEstudiante.map((itemPrograma, index) => {
                        console.log(itemPrograma)
                        let { codPlan, nombrePlan, codFacultad, nombreFacultad } = itemPrograma
                        return (
                            <div key={index} className='p-2 border '>
                                <p>
                                    {codPlan}
                                </p>
                                <p>
                                    {nombrePlan}
                                </p>
                                <p>
                                    {codFacultad}
                                </p>
                                <p>
                                    {nombreFacultad}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Semestres
