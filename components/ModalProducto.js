import React, { useEffect } from 'react'
import Image from 'next/image'
import useQuiosco from '../pages/hook/useQuiosco'
import { formatearCantidad } from '../helpers/helpers'
import { useState } from 'react'


function ModalProducto() {
    const {producto ,handleClickModal, handlepedido, pedido} = useQuiosco()
    const {nombre, id, precio, imagen} = producto
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    useEffect(()=>{
        if(pedido.some(eStade=>eStade.id===producto.id)){
            const productoEdicion = pedido.find(eStade=>eStade.id===producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }

    },[producto,pedido])



  return (
    <div className=' m-5 md:flex gap-5'>
        <div className=' md:w-1/3'>
            <Image width={400} height={400} alt={`imagen de producto ${nombre}`} src={`/assets/img/${imagen}.jpg`} className=' rounded-md'/>
        </div>
        <div className=' md:w-2/3 sm:w-2/3 '>
            <div className=' flex lg:justify-end absolute top-1 right-1 '>
                <button 
                    type='button'
                    onClick={()=>handleClickModal()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>
            </div>
            <h1 className='text-4xl font-bold mt-7 text-center lg:text-left'>{nombre}</h1>
            <p className="mt-7 font-black text-5xl text-green-700 text-center lg:text-start">{formatearCantidad(precio)}</p>
            
            <div className='flex gap-5 mt-7 justify-center lg:justify-start'>
                <button 
                    type='button'
                    onClick={()=>{
                        if(cantidad <= 1) return
                        setCantidad(cantidad - 1)

                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <p className='text-3xl text-center'>{cantidad}</p>
                <button
                    type='button'
                    onClick={()=>{
                        if(cantidad >= 10) return
                        setCantidad(cantidad + 1)

                    }}                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <button 
                type='button' 
                className='bg-pink-500 hover:bg-pink-800 w-full lg:w-3/6 mt-7 text-white p-3 uppercase font-bold rounded-md'
                onClick={()=>{
                    handlepedido({...producto,cantidad})
                    handleClickModal()
                }}
            >
            {edicion ? "guardar cambios" : "agregar al pedido"}
            </button>
        </div>
    </div>
  )
}

export default ModalProducto