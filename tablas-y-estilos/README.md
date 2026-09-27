# Tablas y estilos para Foroactivo

## Nocturne / Kazui v14

Nueva propuesta con galería CSS, Cormorant Garamond e iconos alojados en el repositorio. [Instrucciones y compatibilidad](v14/README.md). [Código para el post](v14/post-para-foro.txt).

## Kazui / LainDev v13

- [post-para-foro.txt](v13/post-para-foro.txt): copiar su contenido completo en el modo cÃ³digo/HTML del editor. Incluye un enlace al CSS y el HTML del post, sin etiquetas html/head/body ni un bloque de estilos largo. Cambiar el relato de muestra por el propio.
- [kazui.css](v13/kazui.css): hoja editable con fuente, diseÃ±o, barra de lectura y adaptaciÃ³n al ancho.
- [vista-previa.html](v13/vista-previa.html): abrir localmente junto al CSS, o servir ambos desde un servidor estÃ¡tico.
- [CREDITOS.md](CREDITOS.md): dependencias y procedencia de los recursos.

La hoja de estilos publicada para esta versiÃ³n se carga mediante:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/owllain/fichas-personajes@72f13ae610ae1a9985227712f0563d239e93a83e/tablas-y-estilos/v13/kazui.css">
```

El identificador tras `@` fija exactamente el contenido del CSS. Editar el archivo de main no cambia los posts que apuntan a esa revisiÃ³n. Para publicar una nueva versiÃ³n, guardar los recursos, obtener su nuevo commit y actualizar el enlace en el fragmento nuevo. No usar main/latest si se desea conservar la apariencia histÃ³rica.

Esta carpeta se sirve directamente a travÃ©s de jsDelivr desde el repositorio pÃºblico; no requiere compilar Astro ni modificar las fichas existentes. No se ha configurado un nuevo sitio web ni GitHub Pages.

## EdiciÃ³n del post

Conservar las clases `ow13` y `ow13-nocturno` y los contenedores. Editar el tÃ­tulo, capÃ­tulo, fecha, metadatos, nombre y estado. El relato estÃ¡ dentro de `.ow13-story`: aÃ±adir bloques `<div class="ow13-p">Texto del pÃ¡rrafo</div>` y usar `<br>` para un salto intencional dentro de un pÃ¡rrafo. La estructura se entrega compacta para reducir los saltos que el editor puede insertar entre elementos. Usar la vista previa del foro antes de publicar.

El panel admite contenido largo y activa desplazamiento al superar 600 px (520 px en la regla para pantallas estrechas). Se probÃ³ localmente con 2.000 lÃ­neas y acceso al final. Esto no establece ni verifica el lÃ­mite de caracteres por mensaje de Foroactivo.

Si el foro no permite HTML o retira `<link>`, necesitarÃ¡ otra vÃ­a de carga aprobada por su administraciÃ³n. El CSS externo reduce el contenido pegado, pero no cambia las reglas de prioridad frente al tema del foro.

## Dependencias

La fuente se solicita desde el CSS a Google Fonts mediante `@import`; las imÃ¡genes siguen usando las URLs de la plantilla original. Los estilos estÃ¡n acotados a la tablilla. No contiene JavaScript ni cambia body o :root del foro.

DocumentaciÃ³n del CDN: https://github.com/jsdelivr/jsdelivr#github
