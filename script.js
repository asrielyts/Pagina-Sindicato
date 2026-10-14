//secciones y formularios
const seccionLogin = document.getElementById("formLogin");
const formularioActivacion = document.getElementById("formularioActivacion");
const seccionActivar = document.getElementById("seccionActivar");
const seccionRecuperar = document.getElementById("seccionRecuperar");


//botones
const botonActivar = document.getElementById("btnActivar");
const botonRecuperar = document.getElementById("btnRecuperar");
const botonVolverActivar = document.getElementById("volverActivar");
const botonVolverRecuperar = document.getElementById("volverRecuperar");

//datos
const campoCorreo = document.getElementById("correoActivacion");
const campoCodigo = document.getElementById("codigoActivacion");
const campoContraseña = document.getElementById("nuevaContrasena");
const campoConfirmacion = document.getElementById("confNuevaContrasena");
const mensajeActivacion = document.getElementById("mensajeActivacion")



// Funciónes
function mostrarSeccion(seccion) {
    seccionLogin.hidden = true;
    seccionActivar.hidden = true;
    seccionRecuperar.hidden = true;

    seccion.hidden = false;
    console.log("Sección actual:",seccion.id);
}


function mostrarMensaje(elemento, mensaje, tipo = "info") {
    elemento.textContent = mensaje;
    elemento.className = tipo;
}


formularioActivacion.addEventListener("submit", function(evento) {
    evento.preventDefault();
    mostrarMensaje(mensajeActivacion,"")
    const correo = campoCorreo.value.trim();
    const codigo = campoCodigo.value.trim();
    const contrasena = campoContraseña.value;
    const confirmacion = campoConfirmacion.value;

    if (contrasena !== confirmacion) {
        mostrarMensaje(
            mensajeActivacion, 
            "Las contraseñas no coinciden", 
            "error")
        return;
    }

    if (contrasena.length < 8) {
        mostrarMensaje(
            mensajeActivacion, 
            "La contraseña debe tener almenos 8 digitos", 
            "error")
        return;
    }

    mostrarMensaje(
        mensajeActivacion, 
        "Datos validados. Espere validacion de servidor",
        "validación"
    )
});



// Activar cuenta
botonActivar.addEventListener("click", function() {
    mostrarSeccion(seccionActivar);
});

// Recuperar contraseña
botonRecuperar.addEventListener("click", function() {
    mostrarSeccion(seccionRecuperar);
});

// Volver desde activación
botonVolverActivar.addEventListener("click", function() {
    mostrarSeccion(seccionLogin);
});

// Volver desde recuperación
botonVolverRecuperar.addEventListener("click", function() {
    mostrarSeccion(seccionLogin);
});

