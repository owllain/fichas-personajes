# Nocturne / Kazui v14

Tabla independiente, sin JavaScript. Cormorant Garamond para títulos y Source Serif 4 para lectura; alas y cruces de Lorc, pequeños iconos de Tabler. Recursos y licencias incluidos.

## Usar en Foroactivo

Copiar `post-para-foro.txt` completo en modo código/HTML, con HTML activado. No pegar el documento `vista-previa.html` dentro del post. Sustituir el relato de muestra y los metadatos. Mantener el HTML estructural compacto para evitar saltos añadidos por el editor.

Cada párrafo usa `<div class="ow14-p">Texto</div>`. El primero puede llevar además `ow14-lead` para la letra capitular. `ow14-quote` sirve para una cita y `ow14-dialogue` para diálogo destacado. La zona de lectura tiene scroll, un máximo de 600px (520px en móvil) y admite texto largo. El límite de caracteres que imponga Foroactivo es independiente del CSS.

## Galería sin JavaScript

Las tres miniaturas seleccionan un retrato con radios nativos y CSS :has(). También se puede usar el teclado. Al duplicar la tabla en otro post, cambiar las TRES apariciones de `name="kazui-v14-20260926-turno01"` por un nombre único para ese post; las tres deben coincidir entre sí. Así las galerías no comparten selección en una misma página.

La primera imagen permanece como alternativa si el navegador no entiende :has() o el editor elimina los controles. Si Foroactivo elimina input/label, el cambio de retratos requerirá una variante distinta; PNG no resuelve el filtrado de controles.

## Archivos y cambios

- `kazui.source.css`: diseño editable.
- `kazui.css`: versión con prioridad de declaraciones dentro de las clases exclusivas ow14 para resistir el CSS del foro.
- `kazui-png.css`: mismo diseño usando iconos PNG transparentes.
- `fragmento.html`: HTML de muestra, sin enlace de estilos.
- `vista-previa.html`: muestra local.
- `post-para-foro.txt`: versión compacta con enlace CDN fijado a una revisión.
- `post-para-foro-png.txt`: alternativa PNG.

Los SVG se cargan como fondos del CSS; no se pega ninguna etiqueta SVG en el mensaje. Esto evita depender de que el editor conserve SVG incrustado. Los recursos relativos se resuelven desde el mismo commit que el CSS. Conservar los créditos y licencias.

La animación ambiental es lenta y las transiciones se desactivan con la preferencia de movimiento reducido. No hay JavaScript, iframe ni eventos inline en el fragmento.

## Comprobaciones y alcance

Probada localmente con la hoja del foro como estilo competidor, con 2.000 párrafos (scroll de 93.233px dentro de 600px) y con una ventana de 360px sin desbordamiento horizontal de la tabla ni de los metadatos. Selección de retratos y cambio de opacidad comprobados mediante teclado. La automatización de clic no confirmó la selección; queda pendiente comprobar el clic manual en la vista previa real.

No se ha enviado ningún post al foro. Su navegador muestra ANONYMOUS; falta comprobar la conservación de link/input/label y la carga SVG/PNG en el editor autenticado. Las pruebas locales no sustituyen esa comprobación.
