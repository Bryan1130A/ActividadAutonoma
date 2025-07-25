//recuerda que rafc es para crear las funciones mas rapido
//control k + control c es para comentar las lineas //

export const Alumnos = () => {

    const alumnos = [
        { nombre: "Viviana", edad: 19, calificacion: 10 },
        { nombre: "Wendy", edad: 20, calificacion: 8 },
        { nombre: "Gerson", edad: 18, calificacion: 9 },
    ];

    const calcularPromedio = (): number => {
        mensaje(); 
        const total = alumnos.reduce((suma, alumno) => 
        suma + alumno.calificacion, 0);
        return total / alumnos.length;
    };

    const mensaje = (): void => {
        console.log("Cpromedio en proceso");
    };

    return (
        <div>
            <h3>Funciones</h3>
            <span>Eel promedio de todos los estudiantes es {calcularPromedio()}</span>
        </div>
    );
};
