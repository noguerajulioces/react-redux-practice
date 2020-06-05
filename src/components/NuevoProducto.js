import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//actions redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {

    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState('');

    const dispatch = useDispatch();

    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto))

    //when de user make sumit
    const submitNuevoProducto = e => {

        e.preventDefault();
        // validar from
        if(nombre.trim() === '' || precio <= 0){
            return;
        }
        // hay errores

        // crear producto nuevo
        agregarProducto({
            nombre,
            precio
        });
    }

    return(
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Precio Producto </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                >
                                </input>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Agregar Producto
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;