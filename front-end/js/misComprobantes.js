import { initNuevoComponente } from "../components/nuevo/js/nuevo.js";
import { initBuscarComponente } from "../components/buscar/js/buscar.js";

export const MISCOMPROBANTES_SERVICE = "http://localhost:8080";

addEventListener("DOMContentLoaded", ()=>{
    opcagregarlibro.addEventListener("click", agregarlibro);
    opceliminarlibro.addEventListener("click", eliminarlibro);
    opcmodificarlibro.addEventListener("click", modificarlibro);
    opcagregaralumno.addEventListener("click", agregaralumno);
    opcmodificaralumno.addEventListener("click", modificaralumno);
    opceliminaralumno.addEventListener("click", eliminaralumno);
    opcagregarusuario.addEventListener("click", agregarusuario);
    opcmodificarusuario.addEventListener("click", modificarusuario);
    opceliminarusuario.addEventListener("click", eliminarusuario);
    opcsolicitarprestamo.addEventListener("click", solicitarprestamo);
    opcdevolucionprestamo.addEventListener("click", devolucionprestamo);
    opchistorialprestamo.addEventListener("click", historialprestamo);
});

async function agregarlibro() {

    principalHeader.innerText = "Agregar libro";

    await loadComponent("components/libros/agregar_libro/html/index.html", 
                  "components/libros/agregar_libro/css/agregarlibro.css",
                  "components/libros/agregar_libro/js/agregarlibro.js");


    initBuscarComponente();
}

async function eliminarlibro() {

    principalHeader.innerText = "Eliminar Libro";

    await loadComponent("components/libros/eliminar_libro/html/index.html", 
                  "components/libros/eliminar_libro/css/eliminar_libro.css",
                  "components/libros/eliminar_libro/js/eliminar_libro.js");

    initNuevoComponente();
}

async function modificarlibro() {
    principalHeader.innerText="Modificar Libro";

    await loadComponent("components/libros/modificar_libro/html/index.html",
                  "components/libros/modificar_libro/css/modificar_libro.css",
                  "components/libros/modificar_libro/js/modificar_libro.js");
}

async function solicitarprestamo() {

    principalHeader.innerText = "Solicitar Prestamo";

    await loadComponent("components/prestamos/solicitud/html/index.html", 
                  "components/prestamos/solicitud/css/styles.css",
                  "components/prestamos/solicitud/js/agregarlibro.js");


    initBuscarComponente();
}

async function devolucionprestamo() {

    principalHeader.innerText = "Devolucion Prestamo";

    await loadComponent("components/prestamos/eliminar/html/index.html", 
                  "components/prestamos/eliminar/css/styles.css",
                  "components/prestamos/eliminar/js/agregarlibro.js");


    initBuscarComponente();
}

async function historialprestamo() {

    principalHeader.innerText = "Historial Prestamo";

    await loadComponent("components/prestamos/historial/html/index.html", 
                  "components/prestamos/historial/css/styles.css",
                  "components/prestamos/historial/js/agregarlibro.js");


    initBuscarComponente();
}

async function agregaralumno() {
    principalHeader.innerText="Agregar Alumno";

    await loadComponent("components/alumnos/agregar_alumno/html/index.html",
                  "components/alumnos/agregar_alumno/css/agregar_alumno.css",
                  "components/alumnos/agregar_alumno/js/agregar_alumno.js");
}

async function modificaralumno() {
    principalHeader.innerText="Modificar Alumno";

    await loadComponent("components/alumnos/modificar_alumno/html/index.html",
                  "components/alumnos/modificar_alumno/css/modificar_alumno.css",
                  "components/alumnos/modificar_alumno/js/modificar_alumno.js");
}

async function eliminaralumno() {
    principalHeader.innerText="Eliminar Alumno";

    await loadComponent("components/alumnos/eliminar_alumno/html/index.html",
                  "components/alumnos/eliminar_alumno/css/eliminar_alumno.css",
                  "components/alumnos/eliminar_alumno/js/eliminar_alumno.js");
}

async function agregarusuario() {
    principalHeader.innerText="Agregar Usuario";

    await loadComponent("components/usuarios/agregar_usuario/html/index.html",
                  "components/usuarios/agregar_usuario/css/eliminar_alumno.css",
                  "components/usuarios/agregar_usuario/js/eliminar_alumno.js");
}

async function modificarusuario() {
    principalHeader.innerText="Modificar Usuario";

    await loadComponent("components/usuarios/modificar_usuario/html/index.html",
                  "components/usuarios/modificar_usuario/css/modificar_alumno.css",
                  "components/usuarios/modificar_usuario/js/modificar_alumno.js");
}


async function eliminarusuario() {
    principalHeader.innerText="Eliminar Usuario";

    await loadComponent("components/usuarios/eliminar_usuario/html/index.html",
                  "components/usuarios/eliminar_usuario/css/eliminar_usuario.css",
                  "components/usuarios/eliminar_usuario/js/eliminar_usuario.js");
}

async function loadComponent(html, css, js) {

    let htmlContent = await fetch(html);
    
    if (htmlContent.ok) {
        principalBody.innerHTML = await htmlContent.text();
        
        if (js != null) {
            const script = document.createElement("script");
            script.src = js;
            script.type = "module"; 
            document.body.appendChild(script);
        }

        if (css != null) {
            const link = document.createElement("link");
            link.rel = "stylesheet"     ;
            link.href = css;
            document.head.appendChild(link);
        }

    }
}

