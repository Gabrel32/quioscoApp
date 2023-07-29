import Image from "next/image"
import useQuiosco from "../hook/useQuiosco";
import Categoria from "./Categoria";

function Sidebar() {

    const {categorias,} = useQuiosco()
  return (
    <>
        <Image width={250} height={200} src={"/assets/img/logo.svg"} alt="imagen logotipo"  className="p-4 mx-20 lg:m-0 w-3/5 lg:w-300"/>
        <nav className="mt-10">
            {categorias.map(e=>(
                <Categoria
                key={e.id}
                e={e}
                />
            ))}
        </nav>
    </>
  )
}

export default Sidebar