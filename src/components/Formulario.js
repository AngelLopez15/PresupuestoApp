import React, {useState} from 'react'

export const Formulario = () => {
    return (
        <form>
            <h2>Agrega tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ejemplo: Transporte"
                />
            </div>
            <div className="campo">
                <label>Cantidad del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ejemplo: 300"
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    )
}