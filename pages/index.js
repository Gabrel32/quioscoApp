import { PrismaClient } from '@prisma/client';
import Layout from '../layout/Layout';
import useQuisco from './hook/useQuiosco';
import Producto from '../components/Producto';

export default function Home() {
  const {categoriaActual,} = useQuisco()

  return (
      <>
      <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
        <h1 className='text-4xl font-black '>{categoriaActual?.nombre}</h1>
        <p className='text-2xl my-10'>
          Elige y personaliza a tu pedido
        </p>
        <div className='grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoriaActual?.productos?.map(e=>(
          <Producto
            key={e.id}
            e={e}
          />
        ))}
        </div>
      </Layout>
      </>
  )
}
  
// export const getServerSideProps = async()=>{
//   const prisma = new PrismaClient();
  
//   const categorias = await prisma.categoria.findMany();
//   const productos = await prisma.producto.findMany();
  


// return{
//   props:{
//     categorias,
//     productos
//   },
// };

// };