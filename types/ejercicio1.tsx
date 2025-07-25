export const Cuadrado = () => {
  const calculoC = (lado:number): number => {
    
    return lado+lado+lado+lado; 
  };

  return (
    <div>
      <h3>Ejercico #1 Calcular el area de un cuadrado</h3>
      <span>El area de tu cuadrado es : {calculoC(4)}</span>
    </div>
  );
};
