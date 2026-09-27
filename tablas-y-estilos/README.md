# Tablas y estilos para Foroactivo

## Kazui / LainDev v13

- [post-para-foro.txt](v13/post-para-foro.txt): copiar su contenido completo en el modo código/HTML del editor. Incluye un enlace al CSS y el HTML del post, sin etiquetas html/head/body ni un bloque de estilos largo. Cambiar el relato de muestra por el propio.
- [kazui.css](v13/kazui.css): hoja editable con fuente, diseño, barra de lectura y adaptación al ancho.
- [vista-previa.html](v13/vista-previa.html): abrir localmente junto al CSS, o servir ambos desde un servidor estático.
- [CREDITOS.md](CREDITOS.md): dependencias y procedencia de los recursos.

La hoja de estilos publicada para esta versión se carga mediante:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/owllain/fichas-personajes@72f13ae610ae1a9985227712f0563d239e93a83e/tablas-y-estilos/v13/kazui.css">
```

El identificador tras `@` fija exactamente el contenido del CSS. Editar el archivo de main no cambia los posts que apuntan a esa revisión. Para publicar una nueva versión, guardar los recursos, obtener su nuevo commit y actualizar el enlace en el fragmento nuevo. No usar main/latest si se desea conservar la apariencia histórica.

Esta carpeta se sirve directamente a través de jsDelivr desde el repositorio público; no requiere compilar Astro ni modificar las fichas existentes. No se ha configurado un nuevo sitio web ni GitHub Pages.

## Edición del post

Conservar las clases `ow13` y `ow13-nocturno` y los contenedores. Editar el título, capítulo, fecha, metadatos, nombre y estado. El relato está dentro de `.ow13-story`: añadir bloques `<div class="ow13-p">Texto del párrafo</div>` y usar `<br>` para un salto intencional dentro de un párrafo. La estructura se entrega compacta para reducir los saltos que el editor puede insertar entre elementos. Usar la vista previa del foro antes de publicar.

El panel admite contenido largo y activa desplazamiento al superar 600 px (520 px en la regla para pantallas estrechas). Se probó localmente con 2.000 líneas y acceso al final. Esto no establece ni verifica el límite de caracteres por mensaje de Foroactivo.

Si el foro no permite HTML o retira `<link>`, necesitará otra vía de carga aprobada por su administración. El CSS externo reduce el contenido pegado, pero no cambia las reglas de prioridad frente al tema del foro.

## Dependencias

La fuente se solicita desde el CSS a Google Fonts mediante `@import`; las imágenes siguen usando las URLs de la plantilla original. Los estilos están acotados a la tablilla. No contiene JavaScript ni cambia body o :root del foro.

Documentación del CDN: https://github.com/jsdelivr/jsdelivr#github
