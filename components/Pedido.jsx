import React from 'react'
import { formatearCantidad } from '../helpers/helpers'
import Image from 'next/image'
import useQuiosco from '../pages/hook/useQuiosco'

function Pedido({e}) {

    const {handleEditarResumen,handelEliminarResumen} = useQuiosco()

    const {nombre, precio, cantidad, imagen, id} = e
  return (
    <div className=' block shadow p-5 mb-3 lg:flex gap-10 items-center jus'>
        <div className='md:w-2/6'>
        <Image
            width={400}
            height={300}
            alt={`imagen del producto ${nombre}`}
            src={`/assets/img/${imagen}.jpg`}
            className='rounded-md'
        />
        </div>
        <div className='md:w-3/6 text-center'>
            <h2 className=' text-xl lg:text-3xl lg:text-left text-amber-700'>{nombre}</h2>
            <p className='text-xl lg:text-left'>Precio: <span className=' text-green-700 text-2xl'>{formatearCantidad(precio)}</span></p>
            <p className='text-sm lg:text-left'>Subtotal: <span className=' text-green-700 text-xl'>{formatearCantidad(precio * cantidad)}</span></p>
            <p className=' text-xl lg:text-left'>Cantidad: {cantidad}</p>
        </div>
        <div className='flex justify-evenly lg:inline mt-3'>
            <button 
                type='button' 
                className="bg-sky-700 lg:mb-2 hover:bg-sky-800 flex gap-1 px-5 py-2 text-white rounded-md shadow-md lg:w-full text-center"
                onClick={()=>handleEditarResumen(id)}
            >   Editar
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg> 
            </button>
            <button 
                type='button' 
                className="bg-red-700  hover:bg-red-800 flex px-3 py-2 text-white rounded-md shadow-md lg:w-full  text-center"
                onClick={()=>handelEliminarResumen(id)}
            > Eliminar
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                </svg>
          
            </button>
        </div>
    </div>
  )
}

export default Pedido