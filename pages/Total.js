import React from 'react'
import { useEffect } from 'react';
import Layout from '../layout/Layout'
import useQuiosco from './hook/useQuiosco';
import { formatearCantidad } from '../helpers/helpers';


function Total() {
    const {pedido, nombre, setNombre, colocarOrden, total} = useQuiosco()

    function comprobarPedido(){
        return pedido.length === 0 || nombre === "" || nombre.length < 3
    }

    useEffect(()=>{
        comprobarPedido()
    },[pedido])

  

  return (
    <>
    <Layout pagina={"Total y Confimar Pedido"}>
        <h1 className='text-4xl'>Total y Confimar Pedido</h1>
        <p className=' text-2xl my-10'>Comfirma tu pedido a continuacion</p>
    
        <form action="" onSubmit={colocarOrden}>
            <div>
                <label htmlFor="nombreUsuario"
                    className='block  text-slate-800 font-semibold text-3xl'
                >
                    Nombre
                </label>
                <input 
                    type="text" 
                    name="Nombre" 
                    id="nombreUsuario" 
                    placeholder='Ingresa tu nombre'
                    className='bg-gray-200 w-full lg:w-1/3 rounded-sm py-1 px-3 mt-3'
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                />
            </div>
            <div className=' mt-10'>
                <p className=' text-2xl font-semibold text-slate-800 m-3'>Total a Pagar  <span className=' text-green-700 text-4xl'>{formatearCantidad(total)}</span></p>
            </div>
            <div>
                <input disabled={comprobarPedido()} className={` ${comprobarPedido() ? "bg-indigo-200" :"bg-indigo-600 hover:bg-indigo-800" } w-full lg:w-auto px-5 py-2 rounded-sm uppercase font-bold text-white mt-3`} type="submit" value="comfimar pedido" />
            </div>
        </form>
    </Layout>

    </>
  )
}

export default Total