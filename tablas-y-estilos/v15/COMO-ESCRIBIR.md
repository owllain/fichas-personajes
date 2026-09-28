# Escribir con Sangre antigua

Abre **post-editable-comentado.txt** y copia todo al modo código/HTML del foro. Conserva el enlace CSS. Los comentarios marcan los lugares editables; dentro del apartado 12 hay modelos de narración, diálogo y pensamiento para copiar.

## Por qué se descolocaba

En el ejemplo recibido había saltos FUERA de los comentarios: después de `<span>`, entre `</div>` y el siguiente comentario, etc. El editor puede convertir esos saltos en saltos visibles. Esta plantilla pone todos los saltos de las instrucciones DENTRO de comentarios HTML. Al retirar los comentarios, su HTML es exactamente el fragmento compacto ya usado. No añade estilos ni cambia el diseño.

Escribe inmediatamente después de `-->`, sin pulsar Enter ahí. Para añadir un párrafo copia un `<div class="ow15-p">...</div>` entero. El espacio entre párrafos ya lo pone el CSS. No hace falta añadir líneas vacías.

## Qué bloque usar

- `ow15-p`: narración normal, repetible.
- `ow15-p ow15-lead`: primer párrafo con letra capitular; úsalo solo una vez al inicio.
- `ow15-dialogue`: diálogo en cursiva y color de acento, como párrafo propio. Incluye las rayas dentro del texto.
- `ow15-quote`: pensamiento o cita destacada, con letra mayor y línea lateral.
- `<em>...</em>` dentro de `ow15-p`: pensamiento discreto sin cambiar el tamaño del relato.
- `<span class="ow15-dialogue">...</span>` dentro de `ow15-p`: diálogo de color intercalado con narración.

Las clases solo dan formato: puedes usar pensamientos con comillas, en cursiva o según tu estilo narrativo. No necesitas copiar todos los modelos. Copia SOLO el bloque HTML desde `<div` hasta `</div>`, pégalo fuera del comentario y antes de `ow15-ending`.

## Si el editor sigue alterando los comentarios

Usa **compactar-post.html**: pega la versión que editaste y pulsa Preparar para Foroactivo. El resultado elimina comentarios e instrucciones, y cambia los saltos reales por espacios. Después pega ese resultado en el foro. Si quieres un salto intencionado dentro de un párrafo, escribe `<br>`; la herramienta lo conserva. No compacta bloques pre/code destinados a mostrar código literalmente; está hecha para esta tabla de rol.

La herramienta funciona localmente y no envía el relato a un servidor. Su JavaScript no va incluido en el post. Usa HTML; no convierte BBCode. No cambies al editor visual durante la edición del código.

Antes de cada post, cambia las tres apariciones del nombre de la galería por un nombre único. Al copiar el post entero como cita puede repetirse ese nombre, por lo que conviene quitar la galería de la cita o renombrarla también.

## Comprobaciones

Se comprobó que quitar los comentarios produce exactamente el HTML compacto original, y que sustituir cada salto de línea por `<br>` dentro de los comentarios tampoco altera ese resultado. Esto simula esa transformación concreta; no sustituye comprobar Previsualizar con el editor autenticado del foro.
