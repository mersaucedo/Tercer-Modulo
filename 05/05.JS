const form = document.createElement("form");
const inputA = document.createElement("input");
const inputB = document.createElement("input");
const inputC = document.createElement("input");
const inputD = document.createElement("input");
const boton = document.createElement("button");
const resul = document.createElement("TEXTAREA");
root.append(form);
form.appendChild(inputA);
form.appendChild(inputB);
form.appendChild(inputC);
form.appendChild(inputD);
form.appendChild(boton);
form.appendChild(resul);

boton.type = "button";
boton.textContent = "enviar";

inputA.type = "text";
inputA.placeholder = "Nombre";
inputA.required = false;

inputB.type = "number";
inputB.placeholder = "Horas";
inputB.required = false;

inputC.type = "text";
inputC.placeholder = "Categoria";
inputC.required = false;

inputD.type = "number";
inputD.placeholder = "Años Servicio";
inputD.required = true;

resul.type = "text";
resul.placeholder = "resultado";

boton.onclick = function () {
  crearRegistro();
 
};

function crearRegistro() {
  
  let nombre = inputA.value;
  let horas = inputB.value;
  let categoria = inputC.value;
  let años = inputD.value;
  let resultadoB;
  let bonificacion;
  let neto;


  if (
    categoria == "a" ||
    categoria == "A" ||
    categoria == "b" ||
    categoria == "B" ||
    categoria == "C" ||
    categoria == "D" ||
    categoria == "c" ||
    categoria == "d" &&
    horas>=1 && años>=0&& nombre==("")
  ) {

    if (categoria == "a" || categoria == "A") {
      resultadoB = horas * 40;
      
    } else if (categoria == "b" || categoria == "B") {
      resultadoB = horas * 35;
     
    } else if (categoria == "c" || categoria == "c") {
      resultadoB = horas * 30;
    } else {
     
    }

    if (años <= 3 && años >= 1) {
      bonificacion = resultadoB * 0.15;
    } else if (años <= 7 && años >= 4) {
      bonificacion = resultadoB * 0.2;
     
    } else if (años <= 12 && años >= 8) {
      bonificacion = resultadoB * 0.3;
     
    } else if (años >= 35) {
      bonificacion = resultadoB * 0.35;
    
    } else {
      resul.value = "ingrese un número mayor a 0";
    }
    neto = resultadoB + bonificacion;

    resul.value = `Trabajador: ${nombre} sueldo básico: ${resultadoB} bonificación:${bonificacion} sueldo neto:${neto}`;
  } else {
    resul.value = "Ingrese una categoria, años o horas válidas";
  }


}
