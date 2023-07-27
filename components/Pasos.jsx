import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const pasos = [
    {paso: 1, nombre:"Menu", url:"/" },
    {paso: 2, nombre:"Resumen", url:"/Resumen" },
    {paso: 3, nombre:"Datos y Total", url:"/Total" }
]

function Pasos() {
    const rauter = useRouter()


    function calcularProcreso(rauter){
        let valor
        if (rauter.pathname === "/") {
            valor = 10;
        } else if(rauter.pathname === "/Resumen"){
            valor = 50
        } else{
            valor = 100
        }
        
        return valor 
    }
  return (
    <>
        <div className='flex justify-between mb-5'>
             {pasos.map(paso=>(
                <button 
                    className='text-2xl' 
                    type='button' 
                    key={paso.paso} 
                    onClick={()=>{
                        rauter.push(paso.url)  
                    }}
                >
                {paso.nombre}
                </button>
            ))}
        </div>
        <div  className=' bg-gray-300 mb-10 rounded-full'>
            <div className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white' style={{width: `${calcularProcreso(rauter)}%`}}></div>

        </div>
    </>
  )
}

export default Pasos