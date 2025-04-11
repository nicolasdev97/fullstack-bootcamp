//Bases de Javascript

//Asignación de desestructuración

//Extrae valores de arreglos o propiedades de objetos y los asigna a una variable

//Objetos

const persona = {
    nombre: "Nicolas",
    edad: 27,
    profesion: "Desarrollador web"
}

let {nombre, ...resto} = persona //Nicolas, edad y profesión
let {nombre: primerNombre} = persona //Nicolas

//Arreglos

const numeros = [10, 20, 30]
let [a, b, c] = numeros //10, 20, 30
let [primero, , tercero] = numeros //10, 30

//Funciones

function saludar({nombre, edad}) {
    console.log("Hola, soy " + nombre + " y tengo " + edad + " años")
}

saludar(persona) //Hola, soy Nicolas y tengo 27 años