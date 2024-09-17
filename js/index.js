// Inicio asignandole una función al evento onclick del elemento con el ID buttonText.
// Esto significa que cuando se haga clic en este elemento (un botón),
// se ejecutará la función definida.
document.getElementById("buttonText").onclick = function() {

    //Para obtener el valor del elemento con el ID inputText (un campo de texto) y almacenarlo en la variable inputText
    const inputText = document.getElementById("inputText").value;

    //Para guardar el valor de inputText en el localStorage del navegador con la clave "dato".
    //localStorage permite almacenar datos que persisten incluso después de cerrar el navegador.
    localStorage.setItem("dato", inputText);
    
    // Limpiar el input después de guardar
    document.getElementById("inputText").value = "";
};