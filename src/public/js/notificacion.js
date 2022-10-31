function verif(){
   
  
    var idp = document.getElementById("idp").value;
    var idctd = document.getElementById("idctd").value;
    var idpre = document.getElementById("idpre").value;
    if ( idp == ""|| idctd == ""|| idpre == "") {
        swal ( "ups!" ,  "¡Datos Incorrectos o incompletos! verifica los campos por favor" ,  "error" )

    } else {
        swal ( "Genial" ,  "Producto Agregado" ,  "success" )
    }
}

function verif2(){
   
  
    var idp2 = document.getElementById("idp2").value;
    var idctd2 = document.getElementById("idctd2").value;
    var idpre2 = document.getElementById("idpre2").value;
    if ( idp2 == ""|| idctd2 == ""|| idpre2 == "") {
        swal ( "ups!" ,  "¡Datos de Modificacion erroneos! verifica los campos por favor" ,  "error" )

    } else {
        swal ( "Genial" ,  "Producto Modificado" ,  "success" )
    }
}
