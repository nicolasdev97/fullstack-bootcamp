//Bases de Javascript

//Funciones

//Bloques de código que se puede reutilizar para hacer tareas

//Pueden tener parámetros
//Los cuales son valores que necesita la función
//Para trabajar

//Pueden tener return
//El cual devuelve un valor
//Cuando se ejecuta la función

//Pueden tener argumentos
//Los cuales son valores
//Que se envían al llamar una función

//Función básica

function saludar(nombre) {
    console.log("Hola, soy " + nombre)
}

saludar("Nicolas") //Hola, soy Nicolás

//Función que retorna valores

function sumar(a,b) {
    return a+b
}

const resultado = sumar(3,5)
console.log(resultado) //8

//Función anónima

const multiplicar = function(x,y) {
    return x*y
}

console.log(multiplicar(2,4)) //8

//Función con parámetros por defecto

function saludar (nombre = "invitado") {
    console.log("Hola, " + nombre)
}

saludar(); //Hola, invitado

//Funciones dentro de funciones

function operacion(a,b) {
    function cuadrado(c) {
        return c*c
    }
    return cuadrado(a) + cuadrado(b)
}

console.log(operacion(2,3)) //2^2 + 3^2 = 4 + 9 = 13