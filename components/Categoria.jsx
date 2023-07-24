import React from 'react'
import Image from 'next/image'
import useQuiosco from '../pages/hook/useQuiosco'

function Categoria({e}) {
  const {categoriaActual, handleClickCategoria} = useQuiosco()

  const {nombre, icono, id} = e
  return (
    <div className={`${categoriaActual?.id === id ? "bg-amber-400" : ""} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
      <Image 
        width={70} 
        height={70} 
        src={`assets/img/icono_${icono}.svg`} 
        alt={`imagen icono ${nombre}`}
        className='mr-3'  
      />
      <button type='button' className=' text-xl lg:text-2xl hover:cursor-pointer' onClick={()=>handleClickCategoria(id)}>
        {nombre}
      </button>
    </div>
  )
}

export default Categoria