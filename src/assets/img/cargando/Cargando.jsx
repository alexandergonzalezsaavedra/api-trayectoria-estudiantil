import React from 'react'
import './Cargando.scss'
const Cargando = ({ cargando }) => {

    if (cargando === 1) {
        return (
            <div id='cargando'>
                <div className='flex justify-center items-center bg-cargando absolute top-0'>
                    <img src='./src/assets/img/cargando/loading.gif' alt='Cargando...' />
                </div>
            </div>
        )
    }
    return (
        <></>
    )
}

export default Cargando
