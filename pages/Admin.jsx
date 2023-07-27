import AdminLayout from "../layout/AdminLayout"

function Admin() {
  return (
    <AdminLayout pagina={"Admin"}>
        <h1 className='text-4xl font-bold'>Panel de Administracion</h1>
        <p className=' text-2xl my-10'>Administra tus Ordenes</p>
    </AdminLayout>
  )
}

export default Admin