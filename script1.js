function Vercontacto(){
    fetch("http://www.raydelto.org/agenda.php").then(function(answer){
        return answer.json();
    }).then(function(answer){
        var xdContacto = document.getElementById("contacto");
        var contacto = answer(1202);
        xdContacto.innerHTML = "El contacto es: " + contacto.nombre + " " + contacto.
        apellido + ", y su numero es: " + contacto.telefono;

    })
}