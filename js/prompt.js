function alerta() {
    var mensaje;
    var opcion = prompt("Introduzca su nombre:", "Nombre");

    if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
    } else {
        mensaje = "Hola " + opcion + " te invitamos a ser emprendedora y a desarrollar tu autonomía económica.";
    }
    document.getElementById("ejemplo").innerHTML = mensaje;
}