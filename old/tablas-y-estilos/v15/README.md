# Kazui v15 — Sangre antigua / Ceniza

[Análisis, fuentes y pruebas](ANALISIS.md) · [Créditos](CREDITOS.md)

Para escribir directamente en la tabla: [plantilla comentada](post-editable-comentado.txt), [guía de escritura](COMO-ESCRIBIR.md) y [compactador del código editado](compactar-post.html).

Usar `post-para-foro.txt` para Sangre antigua o `post-ceniza.txt` para Ceniza. Copiar en el modo código/HTML del editor. No pegar el documento de vista previa. La alternativa `post-para-foro-png.txt` usa PNG transparentes para los símbolos.

`preparar-post.html` permite escribir un relato, elegir acabado y generar un fragmento con un nombre único de galería. Su JavaScript se ejecuta solo en esa herramienta; el código exportado no contiene scripts. Es texto normal, no un editor BBCode.

Si se edita manualmente: cada párrafo usa `div.ow15-p`, el primero puede añadir `ow15-lead`. Las clases `ow15-quote` y `ow15-dialogue` dan formato a citas y diálogos. Reemplazar las TRES apariciones del nombre `kazui-v15-20260926-turno01` por un nombre único para cada post. Deben coincidir entre sí y diferir de otros posts de la misma página. Al citar una tabla entera también se deben cambiar esos nombres, o eliminar la galería de la cita.

La hoja principal tiene ancho máximo de 550px y se reduce al espacio disponible. No depende del ancho completo de la pantalla: incluye consultas al tamaño del contenedor. La barra de lectura conserva un máximo de 600px, 520px en espacios pequeños. El límite de caracteres por mensaje depende de Foroactivo, no del CSS.

Se mantienen todos los recursos con sus licencias en ../v14/assets y ../v14/licenses. Las URLs relativas se resuelven contra el commit fijado del CDN. No borrar v14/assets. No se cambia la v14 publicada.

Para editar el diseño: modificar `kazui.source.css` y ejecutar `python build.py`. El compilador añade prioridad solo a declaraciones de las reglas de la tabla; conserva font-face y keyframes sin esa prioridad. Evitar añadir reglas globales. Tras publicar los nuevos recursos, actualizar el commit de los nuevos fragmentos. La versión ya pegada no cambia automáticamente.

La galería usa radios y :has(); el primer retrato se conserva como alternativa en navegadores sin :has(). La imagen se elige por clic o teclado; hover solo resalta la miniatura. Si el editor elimina inputs, se conserva el primer retrato. Debe comprobarse con la cuenta del foro antes de adoptar la versión definitiva.
