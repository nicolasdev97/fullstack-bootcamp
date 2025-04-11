//Bases de Javascript

//Funciones flecha

//Sintaxis básica

const saludar = (nombre)  => {
    console.log("Hola, " + nombre)
}

saludar("Nico") //Hola, Nico

//Partes de una función flecha

//const saludar > Nombre de la función guardada en una variable
//(nombre) > Parámetros entre paréntesis
//=> > Flecha que indica el inicio del cuerpo
//{ ... } > Cuerpo de la función, puede devolver algo con return

//Regla: Si sólo hay una línea y retorna

const sumar = (a,b) => a + b

console.log(sumar(5,3)) //8

//No necesitas return ni llaves {} si es una sola línea que retorna algo

//Regla: Si solo hay un parámetro

const saludo = nombre => console.log("Hola, " + nombre)

saludo("Nico") //Hola, Nico

//Casos especiales: Sin parámetros

const decirHola = () => console.log("Hola")

decirHola();

//Asíncronia

const obtenerUsuario = async () => {}