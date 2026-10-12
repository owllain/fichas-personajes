# Ange Swan · Caperuza carmesí

Versión independiente: `angeSwan.css`, clases `asw1-*`. No requiere kazui.css ni modifica sus tablas. Mantiene lectura desplazable, tres retratos por clic, adaptación móvil y movimiento reducido. Sin JavaScript en el post.

- `post-para-foro-angeSwan.txt`: copiar completo en el modo HTML del editor.
- `post-editable-comentado-angeSwan.txt`: indicaciones y bloques para escribir.
- `preview.html`: vista local. Abrir mediante un servidor HTTP.

## Colores y encuadre

En `<div class="asw1 asw1-ange">` se puede añadir `style="--asw-pink:#dfa2ab;--asw-red:#a72e43;--asw-beige:#ead5b9"`. Variables disponibles: `--asw-bg`, `--asw-panel`, `--asw-text`, `--asw-muted`, `--asw-line`. Los SVG decorativos conservan su beige original.

Encabezado: `--asw-image:url('https://2img.net/i.imgur.com/VlyFJjB.jpeg')`, `--asw-position:65% 20%`, `--asw-size:cover`. Se pueden ajustar en ese mismo atributo style. El recorte es CSS y no modifica la ilustración.

## Retratos

Se conservan los tres retratos grandes del ejemplo y se emparejan sus miniaturas: sZU2SCZ, wMiKrLe y edQKXxg. La imagen adicional suministrada https://2img.net/i.imgur.com/3ExdW7F.png puede sustituir cualquiera: cambiar tanto la miniatura como su retrato grande.

Cambiar las tres apariciones de `angeSwan-escena01-turno01` por un nombre único para cada post. Para párrafos nuevos usar div asw1-p; para pensamientos span asw1-thought; para voz span asw1-dialogue con las rayas dentro. Evitar saltos fuera de los comentarios al pegar en Foroactivo.

La vista previa local no sustituye comprobar el HTML en el editor del foro: su filtrado puede depender de la configuración del sitio.
