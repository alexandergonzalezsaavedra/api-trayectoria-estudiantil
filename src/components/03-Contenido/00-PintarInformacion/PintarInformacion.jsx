import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import FavoriteIcon from '@mui/icons-material/Favorite';

import React, { useEffect, useState } from 'react'
import DatosEstudiante from '../01-InformacionEstudiante/DatosEstudiante'
import ProgramasEstudiante from '../02-Programas/ProgramasEstudiante'
import PensumProgramasEstudiante from '../02-Programas/PensumProgramasEstudiante'
import BtnProgrma from '../02-Programas/BtnProgrma';
import Materias from '../02-Programas/Materias';
import Modal from '../Modal';

const PintarInformacion = ({
    estadoCarga,
    autenticacion,
    estudiante,
    resProgramas,
    setResProgramas,
    programasEstudiante,
    setProgramasEstudiante,
    resSemestres,
    setResSemestres,
}) => {

    const [codPlan, setcodPlan] = useState('')
    const [nombrePrograma, setNombrePrograma] = useState('')

    const limpiarTabPensum = (e) => {
        e.preventDefault()
        setNombrePrograma('')
    }

    const [infoSemestre, setInfoSemestre] = useState([])
    const [materiasSemestre, setMateriasSemestre] = useState([])

    useEffect(() => {
        datosProgramas(autenticacion)
    }, [autenticacion])
    const datosProgramas = async (autenticacion) => {
        try {
            if (autenticacion.length === 0) {
                console.log('usuario no autenticado')
                return
            }
            estadoCarga(1)

            let headersProgramas = new Headers();
            headersProgramas.append("Authorization", `Bearer ${autenticacion}`);

            let requestOptionsProgramas = {
                method: 'GET',
                headers: headersProgramas,
                redirect: 'follow'
            };

            const dataPromagramas = await fetch(`https://guiaacademicabackend.azurewebsites.net/api/estudiante?correo=${estudiante}`, requestOptionsProgramas)
            const resDataPromagramas = await dataPromagramas.json()
            setResProgramas(resDataPromagramas.data[0])
            setProgramasEstudiante(resDataPromagramas.data[0].datosAcademicos)
        } catch (error) {
            console.log(error)
        } finally {
            estadoCarga(0)
        }
    }
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <DatosEstudiante
                resProgramas={resProgramas}
            />

            <div className='mt-10'>
                <Box sx={{ bgcolor: '#e0e0e0' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                centered
                                className='MuiTabs-indicator'
                                arial-label='tabs'
                                onChange={handleChange}
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            // orientation='vertical'
                            >
                                <Tab icon={<FavoriteIcon />} iconPosition="end" label='Programas' value='1' onClick={limpiarTabPensum} />
                                <Tab label='Pensum programas' value='2' onClick={limpiarTabPensum} />
                                <Tab label='Información' value='3' onClick={limpiarTabPensum} />
                            </TabList>
                            <TabPanel value='1'>
                                <div className="container mx-auto">
                                    <h3>
                                        Programas
                                    </h3>
                                    <br /><br /><br />
                                    <div className='grid grid-cols-2 gap-4'>
                                        <ProgramasEstudiante
                                            programasEstudiante={programasEstudiante}
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value='2'>
                                <div className="container mx-auto">
                                    {
                                        (() => {
                                            if (nombrePrograma.length === 0) {
                                                return (
                                                    <>
                                                        <h3 className='text-red-500 mb-10'>
                                                            Elija un programa para ver su proceso
                                                        </h3>
                                                    </>
                                                )
                                            } else {
                                                return
                                            }
                                        })()
                                    }

                                    <form>
                                        <BtnProgrma
                                            programasEstudiante={programasEstudiante}
                                            setcodPlan={setcodPlan}
                                            setNombrePrograma={setNombrePrograma}
                                        />
                                    </form>
                                    {
                                        (() => {
                                            if (nombrePrograma.length !== 0) {
                                                return (
                                                    <>
                                                        <h3 className='text-blue my-5'>
                                                            Pensum {nombrePrograma}
                                                        </h3>
                                                        <br /><br /><br />

                                                        <div className='grid grid-cols-5 gap-4'>
                                                            <div className='w-full'>
                                                                <PensumProgramasEstudiante
                                                                    codPlan={codPlan}
                                                                    estudiante={estudiante}
                                                                    autenticacion={autenticacion}
                                                                    programasEstudiante={programasEstudiante}
                                                                    estadoCarga={estadoCarga}
                                                                    infoSemestre={infoSemestre}
                                                                    setInfoSemestre={setInfoSemestre}
                                                                    setMateriasSemestre={setMateriasSemestre}
                                                                />
                                                            </div>
                                                            <div className='col-span-4'>
                                                                <Materias
                                                                    infoSemestre={infoSemestre}
                                                                    materiasSemestre={materiasSemestre}
                                                                />
                                                            </div>
                                                        </div>

                                                    </>
                                                )
                                            }
                                        })()
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel value='3'>
                                Información
                            </TabPanel>
                        </Box>
                    </TabContext>
                </Box>

                <Modal />

            </div>
        </>
    )
}

export default PintarInformacion
