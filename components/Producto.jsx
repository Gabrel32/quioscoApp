import Image from "next/image"
import { formatearCantidad } from "../helpers/helpers"
import useQuisco from "../pages/hook/useQuiosco"

function Producto({e}) {
    const {setProducto, handleClickModal, modal } = useQuisco()

    const {nombre,id,imagen,precio} = e
  return (
    <div className='border p-3'>
        <Image width={300} height={200} src={`/assets/img/${imagen}.jpg`} alt={`imagen producto ${nombre}`}/>
        <div className="p-5">
            <h3 className="text-2xl  text-center lg:text-start">{nombre}</h3>
            <p className="mt-1 font-black text-3xl text-green-700">{formatearCantidad(precio)}</p>
            <button type="botton" className="bg-pink-500 hover:bg-pink-800 w-full mt-1 text-white p-3 uppercase font-bold rounded-md" onClick={()=>{
              setProducto(e)
              handleClickModal()
            }} >Agregar</button>
        </div>
        
    </div>
  )
}

export default Producto