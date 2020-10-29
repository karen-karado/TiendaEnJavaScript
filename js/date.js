function mostrarHora() {
    var fecha = new Date();

    horaImprimible = "\nFecha:\n" + fecha.getDate() + "\n/ " + (fecha.getMonth() + 1) + "\n/ " + fecha.getFullYear() + "<br>" + "\n\n\n\nHora: " + fecha.getHours() % 12 + "\n: " + fecha.getMinutes() + "\n\n";
    //salida
    document.getElementById('mostrarHora').innerHTML = horaImprimible;
}