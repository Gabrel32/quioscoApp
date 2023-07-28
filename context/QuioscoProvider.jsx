import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) =>{

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal]= useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState("")  
    const [total, setTotal] = useState(0)

    const rauter = useRouter()


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

    useEffect(()=>{
        const nuevoTotal = pedido?.reduce((total,producto)=>(producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    },[pedido])

    function handleClickCategoria(id){
        const categoria = categorias.filter(e=> e.id === id) 
        setCategoriaActual(categoria[0]);
        rauter.push("/")
    }
    function handleClickModal(){
        setModal(!modal)
    }
    function handlepedido({categoriaId,...producto}){
        if(pedido.some(eState=>eState.id === producto.id)){
            // actualizando la cantidad
            const pedidoActualizado = pedido.map(eStade => eStade.id === producto.id ? producto : eStade)

            setPedido(pedidoActualizado)
            toast.success("Cambios Actualizados", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
        }else{
            setPedido([...pedido,producto])
            toast.success("Agregado al pedido", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })

        }
    } 

    function handleEditarResumen(id){
        const productoActualizado = pedido.filter(e=>e.id === id)

        setProducto(productoActualizado[0])

        handleClickModal()
    }
    function handelEliminarResumen(id){
        
        const pedidoActualizado = pedido.filter(e=>e.id !== id)
        
        setPedido(pedidoActualizado)
    }
    async function colocarOrden(e){
        e.preventDefault()

        try {
            const {data} = await axios.post(`/api/ordenes`, {pedido, nombre, fecha:Date.now().toString(), total})
            // resetear la app
            setCategoriaActual(categorias[0])
            setPedido([])
            setNombre("")
            setTotal(0)

            toast.success("Pedido Realizado Correctamente")

            setTimeout(() => {
                rauter.push("/")
            }, 4000);
        } catch (error) {
            console.log(error);
        }
        
      
        
        
    }
      

    return (
    <QuioscoContext.Provider
        value={{
            categorias,
            handleClickCategoria,
            categoriaActual,
            setProducto,
            modal,
            handleClickModal,
            producto,
            handlepedido,
            pedido,
            handleEditarResumen,
            handelEliminarResumen,
            nombre,
            setNombre,
            colocarOrden,
            total

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