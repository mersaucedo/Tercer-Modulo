function validaForm(){
  // Campos de texto
  if($("#firstname").val() == ""){
      alert("El campo First Name no puede estar vacío.");
      $("#firstname").focus();       
      return false;
  }
  if($("#lastname").val() == ""){
      alert("El campo Last Name no puede estar vacío.");
      $("#lastname").focus();
      return false;
  }
  if($("#email").val() == ""){
      alert("El campo Email no puede estar vacío.");
      $("#email").focus();
      return false;
  }

  if($("#telefono").val() == ""){
    alert("El campo teléfono no puede estar vacío.");
    $("#telefono").focus();
    return false;
}
if($("#sel1").val() == 0){
 

    alert("Selecione una opcion");
    $("#sel1").focus();
    return false;
        
  }
  


  // date
  if(!$("#nacimiento").val()==""){
    alert("Debe confirmar su fecha de nacimiento.");
    
      return false;
  }

  return true; // Si todo está correcto
}

$(document).ready( function() {   
  $("button").click( function() {     
      if(validaForm()){                               
          $.post("enviar.php",$("#formdata").serialize(),function(res){
              $("form").fadeOut("slow");   
              if(res == 1){
                  $("#exito").delay(500).fadeIn("slow");     
                  $("#fracaso").delay(500).fadeIn("slow");    
              }
          });
      }
  });    
});