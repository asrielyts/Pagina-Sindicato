//secciones y formularios
const seccionLogin = document.getElementById("formLogin");
const formularioActivacion = document.getElementById("formularioActivacion");
const seccionActivar = document.getElementById("seccionActivar");
const seccionRecuperar = document.getElementById("seccionRecuperar");


//botones
const botonActivar = document.getElementById("btnActivar");
const botonRecuperar = document.getElementById("btnRecuperar");
const botonesVolver = document.querySelectorAll(".btnVolver")

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
            "La contraseña debe tener al menos 8 digitos", 
            "error")
        return;
    }

    mostrarMensaje(
        mensajeActivacion, 
        "Formulario válido. Pendiente de verificar el código",
        "info"
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

// Volver a inicio de sesion
botonesVolver.forEach(function(boton) {
    boton.addEventListener("click", function() {
        mostrarSeccion(seccionLogin);
    });
});
