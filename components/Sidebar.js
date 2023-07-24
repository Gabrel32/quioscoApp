import Image from "next/image"
import useQuiosco from "../pages/hook/useQuiosco";
import Categoria from "./Categoria";

function Sidebar() {

    const {categorias,} = useQuiosco()
  return (
    <>
        <Image width={300} height={100} src={"/assets/img/logo.svg"} alt="imagen logotipo"/>
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