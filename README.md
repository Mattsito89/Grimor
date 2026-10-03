# Grimorio — desarrollo con Live Server

## Flujo de trabajo

Este proyecto no usa `app.bundle.js`, `vias-index.js` generado ni un script de regeneración.

### Abrirlo

1. Abre esta carpeta en Visual Studio Code.
2. Instala **Live Server** si no lo tienes.
3. Haz clic derecho sobre `index.html` → **Open with Live Server**.

### Añadir contenido

Crea un archivo `.js` en la carpeta correspondiente. El Grimorio descubre automáticamente los `.js` que Live Server encuentra en esas carpetas.

- `JS/Magia/Vias/Custom/` → Vías mágicas Custom
- `JS/Magia/Subvias/Custom/` → Sub-vías mágicas Custom
- `JS/Magia/Metamagia/Custom/` → Metamagia Custom
- `JS/Psiquica/Disciplinas/Oficiales/` → Psíquica oficial
- `JS/Psiquica/Disciplinas/Custom/` → Psíquica Custom
- `JS/Ki/Tecnicas/Oficiales/` → Ki oficial
- `JS/Ki/Tecnicas/Custom/` → Ki Custom
- `JS/Convocatoria/Oficiales/` → Convocatoria oficial
- `JS/Convocatoria/Custom/` → Convocatoria Custom

### Eliminar contenido

Borra el `.js` de su carpeta y recarga Live Server. No hay índices ni bundles que actualizar.

### Plantillas

Los archivos de plantilla se ignoran automáticamente por nombre. Puedes copiarlos para crear contenido nuevo:

- `JS/Magia/Vias/viaTemplate.js` → plantilla de Vía mágica
- `JS/Magia/Subvias/subviaTemplate.js` → plantilla de Sub-vía mágica
- `JS/Magia/Metamagia/ramaTemplate.js` → plantilla de rama de Metamagia
- `JS/Psiquica/Disciplinas/disciplinaTemplate.js` → plantilla de Disciplina Psíquica
- `JS/Magia/Metamagia/metamagiaTemplate.js` → plantilla de principio de Metamagia

> Importante: el sistema está diseñado para ejecutarse mediante Live Server. No se garantiza el descubrimiento automático al abrir `index.html` directamente con `file://`, porque el navegador no permite listar carpetas locales de la misma forma.
## Vercel

El proyecto mantiene la detección automática por listado de carpetas para VS Code + Live Server. Vercel no proporciona ese listado HTML, por lo que durante el build ejecuta automáticamente `npm run build`, que genera `JS/vias-index.vercel.js` con los archivos de contenido encontrados. `JS/vias-index.js` usa ese índice como respaldo cuando no puede descubrir las carpetas.

No necesitas ejecutar el build manualmente antes de cada despliegue: Vercel lo ejecuta mediante `vercel.json`. Para Vercel, el **Root Directory** debe ser la carpeta que contiene `index.html`, `JS/` y `css/`.

