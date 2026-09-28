# Investigación y decisiones — 27 septiembre 2026

## CiaranSoul: observaciones y medidas

Fuentes: [archivo de tablillas](https://ciaransoul.tumblr.com/archive/tagged/tablillas), [Sharpening senses](https://ciaransoul.tumblr.com/post/809907088469934080/sharpening-senses-commisions-this-commission-was), [Helvegen](https://ciaransoul.tumblr.com/post/773223391308267520/52-helvegen) y [muestra pública de Helvegen](https://codepen.io/CiaranSoul/pen/VYZGbXM).

Sharpening senses es una comisión mostrada mediante imágenes. Sus primeras imágenes son portadas promocionales; no constituyen el título tipográfico de todas las tablas. No se identifica una fuente exacta a partir de esas capturas. El rasgo útil es la jerarquía: fondo casi negro, un acento verde, texto neutro y espacios amplios.

Helvegen documenta tres colores para el tema oscuro: Darkseagreen, #bbb y #151515. Su muestra enlazada (una variante, no todas las capturas) declara width:700px, height:500px y texto de 13px. La medición del resultado en CodePen dio 744px de ancho exterior y box-sizing:content-box; la sección del relato medía 312px, con interlineado de 18px y alineación justificada. El título usa Oswald de 50px. El estilo computado del cuerpo declara open-sans, serif; ese nombre no prueba que se esté descargando o usando Open Sans. No se atribuyen esas medidas a todas sus tablas.

Aplicación a nuestro diseño: ancho máximo de 550px, contenido efectivo de lectura cercano a 410px, Source Serif de 15px/1.85, título Cormorant 55/67px. En contenedores pequeños, texto de 14px y título 43/52px. Se conserva alineación izquierda para evitar huecos de justificación, especialmente en móvil. No se reutilizan HTML, CSS, imágenes ni ornamentos de Ciaran; se estudian principios de composición.

Dos acabados: Sangre antigua conserva color en el retrato y usa vino apagado, marfil y latón; Ceniza desatura el retrato y enfría el acento. La imagen sigue siendo protagonista, con el título a la izquierda. Se retiran capítulo y fecha de la cabecera. Las alas quedan alejadas del rostro. Las cruces sirven de extremos a la línea de lectura.

## Foroactivo y box-sizing

No existe una exigencia universal de content-box o border-box para una tablilla. Son modelos de tamaño CSS. Con content-box, el relleno y el borde se suman al ancho declarado; con border-box se incluyen en él. Nuestro componente define border-box tanto en la raíz como en descendientes y pseudoelementos, sin cambiar el foro completo.

El [soporte oficial documenta un editor desajustado por una regla universal](https://asistencia.foroactivo.com/t141139-los-botones-bbcodes-del-editor-de-repuestas-se-ven-afectado-al-anadir-un-efecto-hover-para-otro-elemento). Esto respalda acotar los selectores, no imponer un único modelo al sitio. La [especificación CSS](https://www.w3.org/TR/css-sizing-3/) explica la diferencia. La hoja descargada del foro contiene usos específicos de ambos modelos; por ejemplo #cp-main usa content-box.

El [FAQ de Foroactivo](https://asistencia.foroactivo.com/t629-listado-de-las-preguntas-y-respuestas-frecuentes) explica que HTML se habilita en la administración y en las preferencias del usuario. Es necesario verificar también la opción del mensaje. Tener HTML activo no prueba que todas las etiquetas sobrevivan al filtrado.

El [soporte sobre pestañas con JavaScript en posts](https://asistencia.foroactivo.com/t150511-tabs-con-javascript-en-un-post) indica que JavaScript no funciona en mensajes, MP y firmas. Los módulos administrativos, páginas HTML y widgets son contextos distintos. No se incluyen scripts ni atributos de evento en el post. Si en el futuro la administración colabora, un módulo instalado por ella podría mejorar controles y progreso; no se requiere para esta versión.

El CSS externo reduce el código pegado y evita repetir dependencias, pero no elimina el filtrado HTML ni garantiza disponibilidad de terceros. El enlace CDN queda fijado a un commit. No se usan rutas blob/raw de GitHub como hojas de estilo.

## Verificaciones locales

- Clic sobre retratos 2 y 3 confirmado; la v14 trasladaba la etiqueta durante hover. La v15 mantiene la superficie de clic fija.
- Dos tablas en la misma página con nombres de grupo distintos mantienen selecciones independientes.
- Competencia con CSS del foro y reglas de prueba que imponen content-box, dimensiones de imágenes, fuentes y etiquetas flotantes: se preservan border-box y controles de 44px, miniaturas de 32px.
- Ventana de 360px: tabla de 321px dentro del margen de la muestra, contenido de metadatos de 279px sin desbordamiento.
- 2.000 párrafos: área de 600px y scrollHeight 105.542px; se llega a scrollTop 104.942px, el final.
- Movimiento reducido: reglas para cancelar animaciones y transiciones. No se ha emulado esta preferencia en la herramienta de prueba.

Pendiente: previsualización autenticada en Foroactivo, preservación real de input/label/link y comparación SVG/PNG tras el editor. No se ha publicado ningún post. La prueba local con su CSS no equivale a probar el procesador de mensajes.
