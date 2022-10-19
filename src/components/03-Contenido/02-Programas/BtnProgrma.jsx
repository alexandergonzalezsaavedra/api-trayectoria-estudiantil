import React from 'react'

const BtnProgrma = ({ programasEstudiante, setcodPlan, setNombrePrograma }) => {
    let btnProgramas

    try {
        btnProgramas = programasEstudiante.map((item, index) => {
            let { codPlan, nombrePlan } = item
            return (
                <div key={index}>
                    <input
                        type="radio"
                        className="btn-check"
                        name="options-outlined"
                        id={`${index}`}
                        autoComplete="off"
                        onClick={() => {
                            setcodPlan(codPlan)
                            setNombrePrograma(nombrePlan)
                        }}
                    />
                    <label
                        className="btn btn-outline-success"
                        htmlFor={`${index}`}
                    >
                        {nombrePlan}
                    </label>
                </div>
            )
        })
    } catch (error) {
        btnProgramas = 'Información no encontrada'
    }

    return btnProgramas
}

export default BtnProgrma
