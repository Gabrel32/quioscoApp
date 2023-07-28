import AdminLayout from "../layout/AdminLayout"
import useSWR from "swr"
import axios from "axios"
import Orden from "../components/Orden"

function Admin() {

  const fetcher = () => axios("/api/ordenes").then(datos=>datos.data)

  const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval:100})


  return (
    <AdminLayout pagina={"Admin"}>
      
        <h1 className='text-4xl font-bold'>Panel de Administracion</h1>
        <p className=' text-2xl my-10'>Administra tus Ordenes</p>

        {data && data.length ? (data.map(orden=>(
          <Orden
            key={orden.id}
            orden={orden}
          />
        ))) : <p>No tiene ordenes Aun</p>}
       
    </AdminLayout>
  )
}

export default Admin