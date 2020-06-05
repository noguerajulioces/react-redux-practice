import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';

// Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return (dispatch) => {
        dispatch( agregarProducto() );

        try {
            //insertar en el API
            clienteAxios.post('./productos', producto)
            //si todo sale bin actualizar el pinche state
            dispatch( agregarProductoExito(producto))
        }catch(error){
            console.log(error);
            //si hay error cambiar state
            dispatch( agregarProductoError(true))
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
})

const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});