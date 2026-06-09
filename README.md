# San Pedro Route Studio Dual

Este paquete contiene las dos versiones:

- `desktop.html`: versión PC completa, tipo Google Maps para computador.
- `mobile.html`: versión móvil para iOS y Android, con interfaz tipo Google Maps móvil.
- `index.html`: detecta automáticamente el dispositivo y abre la versión correcta.

## Cómo publicar en GitHub Pages

1. Sube todo el contenido del ZIP a la raíz del repositorio.
2. Activa GitHub Pages en Settings > Pages.
3. Abre la URL principal del sitio.
4. La app abrirá automáticamente PC o móvil según el dispositivo.

## Acceso manual

- Para PC: `desktop.html`
- Para celular: `mobile.html`
- Desde la portada: botones “Abrir versión PC” y “Abrir versión móvil”.

## Importante

La versión PC no fue reemplazada. Se conserva como `desktop.html`.
La versión móvil funciona aparte como `mobile.html`.


## Ajuste iOS/Android refinado

Se editó únicamente `mobile.html`. La versión `desktop.html` permanece intacta.

Mejoras móviles:
- Menos elementos visibles sobre el mapa.
- Buscador superior más compacto.
- Capas dentro de un botón flotante.
- Controles laterales pequeños.
- Panel inferior más bajo y menos invasivo.
- Panel con comportamiento tipo iOS/Apple Maps: minimizado, medio y completo.
- Logos institucionales movidos al panel, no sobrecargan el mapa.


## Ajuste de ícono y notificaciones

Se agregó un ícono oficial de instalación para iOS/Android:
- `assets/app-icon-192.png`
- `assets/app-icon-512.png`
- `assets/app-icon-1024.png`
- `assets/apple-touch-icon.png`

También se reemplazó la burbuja invasiva de “Punto identificado” por una tarjeta flotante no invasiva:
- En PC aparece como tarjeta lateral.
- En móvil aparece como tarjeta inferior compacta.
- Permite agregar parada, copiar coordenadas o cerrar sin tapar el punto del mapa.
