import React, { useState } from 'react'

export const ContadorCinco = () => {

   const [contador, setContador] = useState<number>(0);

    const gestionContador = (num: number): void => {
        setContador(contador + num);
    }

    return (
        <div>
            <h3>Contador: <small>{contador}</small></h3>
            <button className="btn btn-primary"
                onClick={() => gestionContador(5)}>incrementar</button>
            &nbsp;
            <button className="btn btn-primary"
                onClick={() => gestionContador(-5)}>disminuir</button>
        </div>
    )
}
