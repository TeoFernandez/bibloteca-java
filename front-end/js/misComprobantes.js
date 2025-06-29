import { initNuevoComponente } from "../components/nuevo/js/nuevo.js";
import { initBuscarComponente } from "../components/buscar/js/buscar.js";

export const MISCOMPROBANTES_SERVICE = "http://localhost:8080";

addEventListener("DOMContentLoaded", ()=>{

    opcagregarlibro.addEventListener("click", agregarlibro);
    opceliminarlibro.addEventListener("click", eliminarlibro);
    opcmodificarlibro.addEventListener("click", modificarlibro);

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
                  "components/libros/eliminar_libro/css/modificar_libro.css",
                  "components/libros/eliminar_libro/js/modificar_libro.js");
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

