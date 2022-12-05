
class Alumno {
    constructor (codigo,nombre,nota1,nota2,nota3,nota4){
    this._nombre =nombre;
    this.codigo =codigo;
    this.nota1 =nota1;
    this.nota2 =nota2;
    this.nota3 =nota3;
    this.nota4 =nota4;
    }

get nombre(){
    return `El nombre del alumno es ${this._nombre}`
}
set nombre(nuevo){
    this._nombre = nuevo

}

 promedio = function() {
    let suma = (this.nota1*0.15)+(this.nota2*0.20)+(this.nota3*0.25)+(this.nota4*0.40)
    return suma;   
}

condicion = function() {
    let resultado = "" ;
    if (alumno.promedio()>=12){
         resultado = "Aprobado"
    }else{
        resultado = "Desaprobado"
    } 
    return resultado;   
}

obsequio = function() {
    let resultado = "" ;
    if (alumno.promedio()>17){
         resultado = "Te ganaste una mochila"
    }else{
        resultado = "Sigue esforzándote"
    }
    return resultado;  
}
}

let alumno = new Alumno("1", "Carlos", 15,18,20,16)
console.log(`El codigo es ${alumno.codigo}`)
console.log(alumno.nombre)
console.log(alumno.promedio())
console.log(alumno.condicion())
console.log(alumno.obsequio())