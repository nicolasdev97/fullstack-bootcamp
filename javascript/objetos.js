//Bases de Javascript

//Objetos

//Permiten agrupar información con pares clave-valor

const persona = {
    nombreCompleto: {
        nombre: "Nicolas",
        primerApellido: "Palacio",
        segundoApellido: "Ordoñez"
    },
    edad: 27,
    profesion: "Desarrollador web",
    isSenior: true,
    tecnologias: [
        "react",
        "node.js",
        "mongodb"
    ]
}

//Acceder a propiedades

const nombrePersona = persona.nombreCompleto.nombre; //Nicolas
console.log(nombrePersona)

//Modificar propiedades

persona.edad = 28
persona.profesion = "Desarrollador web fullstack"

//Agregar nuevas propiedades

persona.ciudad = "Cali"

//Eliminar propiedades

delete persona.ciudad

//Recorrer un objeto

for(let clave in persona) {
    console.log(persona[clave])
}

//Métodos en objetos

const perro = {
    nombre: "Juana",
    ladrar() {
        console.log("¡Guau!");
    }
}

perro.ladrar(); //¡Guau!

//Objetos dentro de objetos

const futbolista = {
    nombre: "Lionel",
    dorsal: 10,
    equipos: {
        primero: "Barcelona",
        segundo: "PSG",
        tercero: "Inter de Miami"
    }
}

//Métodos en objetos

Object.keys(futbolista) //Nombre, dorsal, equipos
Object.values(futbolista) //Lionel, 10, [primero: Barcelona, segundo: PSG, tercero: Inter de Miami]
Object.entries(futbolista) //[Nombre, Lionel], [dorsal, 10], [equipos, [primero: Barcelona, segundo: PSG, tercero: Inter de Miami]]