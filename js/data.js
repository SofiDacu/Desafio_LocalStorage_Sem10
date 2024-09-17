document.addEventListener("DOMContentLoaded", function() {

    //obtiene el valor almacenado en localStorage con la clave "dato" y se guarda en la variable guardarData.
    const guardarData = localStorage.getItem("dato");

    //selecciona el elemento con el ID data y establece su contenido de texto al valor almacenado en guardarData.
    document.getElementById("data").textContent = guardarData;
});