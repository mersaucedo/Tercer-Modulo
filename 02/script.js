// //1. Crear una funcion que convierta los strings que se ingresan como parametros a estilo capitalizado.
// // Ejemplo: "hola a todos" => "Hola A Todos"

// let frase = "hola a todos" // "Hola a todos"

// function capitalizar(cadena){ //"hola a todos"
//     let array = cadena.split(" ") // ["hola", "a", "todos"]
//     let cadenaCapitalizada = []
//     for(const index in array){
//         cadenaCapitalizada.push((array[index].charAt(0).toUpperCase() + array[index].slice(1))) // h   a   t
//     }
//     return cadenaCapitalizada.join(" ")
// }

// //2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// // En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// // Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.

// let persona = { nombre: "", apellido: "Pacheco", edad: 38, profesion: ""}

// function verificar(objeto) {
//     for(const index in objeto) {
//         if (objeto[index] === "") {
//             alert(`El campo ${index} está vacío`)
//         }
//     }
// }

// //3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// // complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.

// let persona2 = { nombre: "", apellido: "Pacheco", edad: 38, profesion: ""}

// function verificarYLlenar(objeto) {
//     for(const index in objeto) {
//         if (objeto[index] === "") {
//             objeto[index] = prompt(`El campo ${index} está vacío, por favor llenalo: `)
//         }
//     }
//     return objeto
// }

// //4. Te enviaron una base de datos de usuarios:

// // let users = [
// //     {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
// //     {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
// //     {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
// //     {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
// //     {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
// //     {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
// // ]

// // Te piden que utilizando las funciones de los ejercicios anteriores, evalues que usuarios tienen datos pendientes
// // y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.

// let users = [
//     {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
//     {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
//     {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
//     {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
//     {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
//     {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
// ]

// for(const index in users){
//     verificarYLlenar(users[index])
// }

// console.log(users)

//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.
function ordenar() {
  users.sort((a, b) => a.edad - b.edad);
  console.log(users);
}

let users = [
  { nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer" },
  { nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor" },
  { nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico" },
  {
    nombre: "Samuel",
    apellido: "Martinez",
    edad: 29,
    profesion: "programador",
  },
  { nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef" },
  {
    nombre: "Mercedes",
    apellido: "Sanchez",
    edad: 35,
    profesion: "veterinario",
  },
];

//6. Crear una funcion que nos permita escribir los datos de cada usuario en el navegador linea por linea de la siguiente manera:
// 1. Recorrer el arreglo users
// 2. Obtener los valores de cada llave
// 3. Formar la frase nombre apellido tiene edad años y es profesion
// 4. Escribir esta fra
// Ejemplo: "Andres Soto tiene 28 años y es profesor"

//7. Crear una funcion que nos permita ingresar el parametro por el cual se va a ordenar la lista de usuarios y retorne la lista
// ordenada.
function ordenar(argument) {
  let validInput = ["nombre", "apellido", "edad", "profesion"];
  if (validInput.includes(argument)) {
    let result =
      argument === "nombre" ||
      argument === "apellido" ||
      argument === "profesion"
        ? users.sort((a, b) => a[argument].localeCompare(b[argument]))
        : users.sort((a, b) => a[argument] - b[argument]);
    console.log(result);
  } else {
    console.log("Debes ingresar un argumento válido");
  }
}

//8. Crear un boton con javascript que diga "Aceptar" y cuando se le de click mande una alerta que diga: "De acuerdo!"

const root = document.getElementById("root");
const button = document.createElement("button");
button.textContent = "Aceptar";


button.style.cursor = "pointer"
button.style.background = "red"
button.style.color = "white"
button.style.border = "none"
button.style.width ="70px"
button.style.height="50px"

button.addEventListener("click", (e) => {
    alert("de acuerdo!")
})

//9. Agrega un listener al boton para que cuando el usuario haga hover sobre este, el boton desaparezca.


button.addEventListener("mousemove", () => {
  button.style.visibility= "hidden";

})
button.addEventListener("mouseleave", () =>{
  
  button.style.visibility = "visible";
  
})
root.append(button);

