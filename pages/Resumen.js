import React from 'react'
import Layout from '../layout/Layout'
import useQuiosco from './hook/useQuiosco'
import Pedido from '../components/Pedido'

function Resumen() {

    const {pedido} = useQuiosco()
    

  return (
    <>
    <Layout pagina={"Resumen"}>
        <h1 className='text-4xl'> Resumen</h1>
        <p className=' text-2xl my-10'>Revisa tu Pedido </p>
        {pedido?.length === 0 ? (<p  className='text-center text-2xl '>Aun no tiene Pedidos</p>)
        : ( pedido?.map(e=>(
            <Pedido
                e={e}
                key={e.id}

            />
        )))
        }
    </Layout>
    </>
  )
}

export default Resumen