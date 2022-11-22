let contacto = {nombre: 'Fro', apellido: 'Zo', telefono: 'No'};
fetch("http://www.raydelto.org/agenda.php", 
{
 method:'POST', 
 body:JSON.stringify(contacto)}
).then( res => res.json()).then(
 (res) => 
{
 console.log(res); // imprime la respuesta del servidor
}
);