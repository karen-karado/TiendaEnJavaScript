function alerta1() {
    var mensaje1;
    var opcion1 = confirm("¿Deseas saber acerca de autonomía económica de las mujeres?");
    if (opcion1 == true) {
        mensaje1 = "Has clickado OK";
    } else {
        mensaje1 = "Has clickado Cancelar";
    }
    document.getElementById("ejemplo1").innerHTML = mensaje1;
}