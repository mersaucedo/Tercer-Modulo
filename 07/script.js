const nombre= document.getElementById("firstname");
const apellido= document.getElementById("lastname");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const button = document.getElementById("button");
const form = document.getElementById("form");

let parrafo = document.createElement("p");
form.append(parrafo);

let errores = [];
nombre.addEventListener("input", () => {
    let dataName = nombre.value;
    let expRegNom =
    /^[a-zA-ZÀ-ÿ\s]{4,16}$/;
    let nombreOk = expRegNom.test(dataName);
    if (nombreOk) {
      nombre.style.background = "#0616";
      errores[0] = "";
    } else if (dataName == "") {
      nombre.style.background = "none";
    } else {
      nombre.style.background = "#f116";
      errores[0] = "El nombre tiene que ser de 4 a 16 dígitos y solo puede contener letras y guion bajo. ";
    }
  });


  apellido.addEventListener("input", () => {
    let dataApellido = apellido.value;
    let expRegApe =
    /^[a-zA-ZÀ-ÿ\s]{4,16}$/;
    let apellidoOk = expRegApe.test(dataApellido);
    if (apellidoOk) {
      apellido.style.background = "#0616";
      errores[0] = "";
    } else if (dataApellido == "") {
      apellido.style.background = "none";
    } else {
      apellido.style.background = "#f116";
      errores[0] ="El nombre tiene que ser de 4 a 16 dígitos y solo puede contener letras y guion bajo. ";
    }
  });


email.addEventListener("input", () => {
  let dataEmail = email.value;
  let expRegEmail =
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let emailOk = expRegEmail.test(dataEmail);
  if (emailOk) {
    email.style.background = "#0616";
    errores[0] = "";
  } else if (dataEmail == "") {
    email.style.background = "none";
  } else {
    email.style.background = "#f116";
    errores[0] = "La contraseña tiene que ser de 8 a 30 dígitos.";
  }
});

telefono.addEventListener("input", (e) => {
  let dataTel = telefono.value;
  let expRegTel = /^9\d{8}$/ ;
  let telOk = expRegTel.test(dataTel);

  if (telOk) {
    telefono.style.background = "#0616";
    errores[1] = "";
  } else if (dataTel == "") {
    email.style.background = "none";
  } else {
    telefono.style.background = "#f116";
    errores[1] = "El celular solo puede contener 9 dígitos. ";
  }
});



button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(errores);
  if (!errores.every((e) => e == "")) {
    parrafo.textContent = errores.join("");
  } else {
    parrafo.textContent = "Formulario Correcto";
  }
});