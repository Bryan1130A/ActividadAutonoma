
export const Arreglo = () => {

  
  const sumar = (arreglo: number[]): number => {
    let suma = 0
    for (const numero of arreglo) {
     suma = suma + numero ;
    }
    return suma;
    
  };



  return (
    <div>
      <h3>Ejercicio 2 :Arreglo</h3>
      <span>suma elementos:{sumar([1,2,3,4])}</span>
    </div>
  );
};
