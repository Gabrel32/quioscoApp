import axios from "axios";
import { useState, useEffect, createContext } from "react";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) =>{

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal]= useState(null)

    async function obtenerCategorias(){
        try {
            const {data} = await axios("/api/categorias")
            setCategorias(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        obtenerCategorias()
    },[])

    useEffect(()=>{
        setCategoriaActual(categorias[0])
    },[categorias])

    function handleClickCategoria(id){
        const categoria = categorias.filter(e=> e.id === id) 
        setCategoriaActual(categoria[0]);
    }
    

    return (
    <QuioscoContext.Provider
        value={{
            categorias,
            handleClickCategoria,
            categoriaActual,
            setProducto
        }}
    >
        {children}
    </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext