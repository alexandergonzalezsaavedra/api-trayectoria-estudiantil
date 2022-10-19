const ProgramasEstudiante = ({ programasEstudiante }) => {

    let datosProgramas

    try {
        datosProgramas = programasEstudiante.map((dataPrograma, index) => {
            let { codPlan, nombrePlan, codFacultad, nombreFacultad } = dataPrograma
            return (
                <div key={index}>
                    {codPlan}
                    <br />
                    {nombrePlan}
                    <br />
                    {codFacultad}
                    <br />
                    {nombreFacultad}
                </div>
            )
        })
    } catch (error) {
        datosProgramas = 'Información no encontrada'
    }

    return datosProgramas
}

export default ProgramasEstudiante
