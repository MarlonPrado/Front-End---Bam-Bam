function verif(){
    var idc = document.getElementById("idc").value;
    var idv = document.getElementById("idv").value;
    var idp = document.getElementById("idp").value;
    var idctd = document.getElementById("idctd").value;
    var idpre = document.getElementById("idpre").value;
    if (idc == "" || idv == "" || idp == ""|| idctd == ""|| idpre == "") {
        swal ( "ups!" ,  "¡Datos Incorrectos o incompletos! verifica los campos por favor" ,  "error" )

    } else {
        swal ( "Genial" ,  "Producto Agregado" ,  "success" )
    }
}