import React from 'react'
import { formatearCantidad } from '../helpers/helpers'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'

function Orden({orden}) {
    const {fecha, id, nombre, pedido, total} = orden


    async function completarOrden(){
        let a  = confirm("desea completar la orden")
        if(a){
            try {
              const {data} =  await axios.post(`/api/ordenes/${id}`)
              toast.success("Orden Completada Correctamente",{
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
            } catch (error) {
                toast.error("Hubo un error")
            }
        }else{
            return
        }
    }
  return (
    <div className='border p-10 space-y-5'>
        <h3 className=' text-2xl'> Orden:{id}</h3>
        <p className=' text-xl'>Cliente:{nombre}</p>
        <div>
            {pedido.map(e=>(
                <div key={e.id} className='py-3 flex border-b last-of-type:border-0 items-center'>
                    <div className='lg:w-32'>
                        <Image width={200} height={200} src={`/assets/img/${e.imagen}.jpg`} alt={`nombre del producto ${e.nombre}`} className=' rounded-md'/>
                    </div>
                    <div className='p-5 space-y-2'>
                        <h4 className=' text-xl text-amber-500 font-bold'>{e.nombre}</h4>
                        <p className='text-lg '>Cantidad:{e.cantidad}</p>
                        
                    </div>

                    


                </div>
            ))}
        </div>
        <div className='md:flex md:items-center md:justify-between my-10'>
            <p className='mt-5 font-black text-4xl bg-amber-500 rounded-md px-2'>Total a Pagar: {formatearCantidad(total)}</p>
            <button onClick={()=>completarOrden()} type='button' className=' bg-indigo-600 hover:bg-indigo-800 md:mt-0  mt-5 py-3 px-10 text-white uppercase font-bold rounded-md'>Completar orden</button>
        </div>
    </div>
  )
}

export default Orden