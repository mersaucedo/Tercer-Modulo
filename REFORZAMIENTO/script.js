let users = [
    {nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer"},
    {nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico"},
    {nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]

let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

let students = [
    { 
        codigo: "1001",
        nombre: "Alberto", 
        apellido: "Gonzales", 
        profile_picture: "https://randomuser.me/api/portraits/men/54.jpg",
        email: ""
    },
    {
        codigo: "1102",
        nombre: "Yadira",
        apellido: "Sanchez",
        profile_picture: "https://randomuser.me/api/portraits/women/60.jpg",
        email: ""
    },
    {
        codigo: "1203",
        nombre: "Carol",
        apellido: "Martinez",
        profile_picture: "https://randomuser.me/api/portraits/women/62.jpg",
        email: ""
    },
    { 
        codigo: "1042",
        nombre: "Junior", 
        apellido: "Prieto", 
        profile_picture: "https://randomuser.me/api/portraits/men/44.jpg",
        email: ""
    },
    { 
        codigo: "1025",
        nombre: "Pedro", 
        apellido: "Ampuero", 
        profile_picture: "https://randomuser.me/api/portraits/men/48.jpg",
        email: ""
    },
    { 
        codigo: "1018",
        nombre: "Ines", 
        apellido: "Valencia", 
        profile_picture: "https://randomuser.me/api/portraits/women/44.jpg",
        email: ""
    },
    { 
        codigo: "1104",
        nombre: "Anita", 
        apellido: "Quispe", 
        profile_picture: "https://randomuser.me/api/portraits/women/35.jpg",
        email: ""
    },
    { 
        codigo: "1246",
        nombre: "Armando", 
        apellido: "Paredes", 
        profile_picture: "https://randomuser.me/api/portraits/men/64.jpg",
        email: ""
    },
]



// 1. Crear una funcion que ordene a los estudiantes en funcion de su codigo, nombre o apellido
    
    function ordenarArregloDeObjetosPorParametro(arreglo, parametro){
        const parametrosValidos = Object.keys(arreglo[0])
        if (parametrosValidos.includes(parametro)){
            if (typeof arreglo[0][parametro] === "number"){
                return arreglo.sort((a,b) => a[parametro] - b[parametro])    
            } else {
                return arreglo.sort((a,b) => a[parametro].localeCompare(b[parametro]))
            }
        } else {
            console.log(`Por favor utilice uno de los parametros validos: ${parametrosValidos.join(' - ')}`)
        }
    }

// 2. Crear una funcion que genere un correo electronico en base a el nombre y apellido del alumno.
// Ejemplo: Andres Perez -> aperez@mtpecertus.com
// La funcion debe verificar que no existan dos personas con el mismo email.En caso asi sea se agregara
// un numero al nombre del correo.
// Ejemplo: Anita Perez -> aperez2@mtpecertus.com
 function generarCorreo(arreglo){
        
     for (const object of arreglo){
        let email = `${object.nombre.charAt(0)}${object.apellido}@mtpecertus.com`.toLowerCase() //aperez@mtpecertus.com
        let filteredByMail = arreglo.filter(obj => obj.email === email)
        if (filteredByMail.length > 0){
            `${object.nombre.charAt(0)}${object.apellido}${filteredByMail.length + 1}@mtpecertus.com`.toLowerCase()
         } else {
            object.email = email
        }
    }
 }
// function generarCorreo(arreglo){
//     for (const object of arreglo){
//         object.email = `${object.nombre.charAt(0)}${object.apellido}${object.codigo}@mtpecertus.com`.toLowerCase() //aperez@mtpecertus.com
//     }
// }


//  function generar_correo(arreglo) {
//      for(index in arreglo){
//      let correo = arreglo[index].nombre[0]+arreglo[index].apellido+"@mtpecertus.com"
//      let existe = arreglo.filter(e => e.email == correo.toLowerCase())
//      if (existe.length > 0) {
//      correo = arreglo[index].nombre[0]+arreglo[index].apellido+arreglo[index].codigo[3]+"@mtpecertus.com"
//      }
//      arreglo[index].email = correo.toLowerCase()
//      }
//     return arreglo
//      }
//     console.log(generar_correo(students))


// 3. Crear una funcion que permita crear un nuevo alumno pidiendo los datos a traves de un prompt al
// usuario. OJO: Recuerda que el correo es autogenerado. El profile_picture debe ser llenado con la api
// https://randomuser.me/api/portraits/{gender}/{number}.jpg. Para efectos del ejercicio, dos personas
// podrian compartir la misma foto de perfil.

// 4. Crea un input text para ingresar parametros de busqueda de alumnos y que renderice la informacion 
// del alumno al hacer submit en el boton de "buscar".

function buscar(parametro, valor){
    let buscarA = students.filter((students  => students[parametro] === valor));
   
        }







// 5. FETCHING DATA: crear una funcion asincrona para pedir informacion a la api de pokemon.
// https://pokeapi.co/api/v2/generation/1/


async function pedirYMostrar(){
    let response = await fetch('https://pokeapi.co/api/v2/generation/1/')
    let data = await response.json()
    data.pokemon_species.forEach((element) => {
        console.log(element.name)
    })
    return data
}

// 6. Crear una lista de pokemons del objeto pokemon_species y renderizarlos en pantalla

// 7. Usando la informacion obtenida de la API, haz una funcion asincrona que pida las fotos de los pokemons
// y los renderice en la pantalla.
