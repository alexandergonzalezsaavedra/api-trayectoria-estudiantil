import React, { useState } from 'react'
import Programas from '../Programas/Programas'
import Semestres from '../Programas/Semestres'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'


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
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Programas
                estadoCarga={estadoCarga}
                autenticacion={autenticacion}
                estudiante={estudiante}
                setResProgramas={setResProgramas}
                setProgramasEstudiante={setProgramasEstudiante}
            />

            <Box>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            arial-label='tabs'
                            onChange={handleChange}
                        >
                            <Tab label='Información estudiante' value='1' />
                            <Tab label='Programas' value='2' />
                            <Tab label='Tres' value='3' />
                        </TabList>
                        <TabPanel value='1'>
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
                        </TabPanel>
                        <TabPanel value='2'>

                            <Semestres
                                estadoCarga={estadoCarga}
                                autenticacion={autenticacion}
                                resProgramas={resProgramas}
                                programasEstudiante={programasEstudiante}
                                setResSemestres={setResSemestres}
                            />
                        </TabPanel>
                        <TabPanel value='3'>

                        </TabPanel>
                    </Box>
                </TabContext>
            </Box>
        </>
    )
}

export default PlanEstudios
