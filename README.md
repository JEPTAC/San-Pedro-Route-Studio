# San Pedro Route Studio Universal PWA

Versión universal para computador, iOS y Android.

## Qué incluye

- Una sola app para computador y celular.
- Vista satelital realista + etiquetas.
- Vista de calles.
- Búsqueda de direcciones/coordenadas.
- Paradas múltiples.
- Reordenamiento de paradas.
- Ruta desde Colegio José Antonio Aguilera.
- Navegación animada estilo Strava.
- Modo rendimiento.
- Grabación WebM en navegadores compatibles de computador.
- Modo pantalla limpia con grabación automática solo mapa en navegadores compatibles.
- Exportación GeoJSON, GPX y KML.
- Abrir ruta en Google Maps y Waze.
- PWA instalable en Android y iPhone.

## Importante sobre video

En computador, Chrome/Edge permiten grabación interna mediante captura de pestaña.
En iOS y Android, la mayoría de navegadores no permiten `getDisplayMedia` completo desde una página web. Por eso se conserva la navegación animada y el modo limpio, pero para grabar en móvil se recomienda usar la grabadora nativa del celular.

## Publicar en GitHub Pages

1. Sube todo el contenido del ZIP a la raíz de tu repositorio.
2. Ve a Settings > Pages.
3. Activa Pages desde la rama principal y carpeta root.
4. Abre la URL en computador o celular.

## Instalar en Android

Chrome > menú de tres puntos > Instalar app / Agregar a pantalla principal.

## Instalar en iPhone

Safari > Compartir > Agregar a pantalla de inicio.


## Grabación automática limpia

El botón **Pantalla limpia + grabar** automatiza el flujo:
1. Solicita permiso de captura.
2. El usuario selecciona **Esta pestaña**.
3. La app oculta interfaz, logos, controles y paneles.
4. Reproduce la ruta.
5. Descarga el video WebM automáticamente.

Por seguridad del navegador no es posible saltarse el permiso de captura ni seleccionar la pestaña automáticamente.
