# Moreno Santos Joiers — Web v2

## Proyecto
Web estática HTML pura (sin frameworks, sin npm). Joyería y relojería en Barcelona.
- **Directorio:** `/Users/cristina/Library/Mobile Documents/com~apple~CloudDocs/Documentos/Moreno Santos/Web/v2/`
- **GitHub:** `https://github.com/cristinamorenoco/MorenoSantosJoiers`

## Páginas
- `index.html` — home (antes: `moreno-santos-blanco (2).html`)
- `colecciones.html`
- `atelier.html`
- `nosotros.html`
- `contacto.html`
- `encargo.html` — formulario de encargo personalizado

## Dev Server
- **Comando:** `python3 -m http.server 8000 --directory <ruta>`
- **URL:** http://localhost:8000
- **Config:** `.claude/launch.json` — arrancar con `preview_start "Static Dev Server"`

## Stack & Convenciones
- CSS variables en `:root`: `--lilac`, `--lilac-soft`, `--lilac-pale`, `--lilac-mist`, `--ink`, `--ink-mid`, `--ink-light`, `--border`
- Fuentes: `Cormorant Garamond` (títulos) + `Jost` (cuerpo)
- Animaciones reveal: clase `.reveal` + IntersectionObserver en cada página
- El cursor animado `ring` **solo existe en el index** — no incluir en páginas secundarias

## Bugs conocidos / resueltos
- `ring is not defined` en páginas secundarias → eliminar el forEach que referencia `ring` en el `<script>`
- Sección form sin `<section>` wrapper → añadir `<section id="form" class="section-form">` y el selector CSS correspondiente

## Imágenes
- Todas las imágenes están en `images/` como archivos externos (migradas de base64)
- Logo único: `images/logo.png` (495 KB) — se usa en nav y footer de todas las páginas
- Para cambiar el logo: reemplazar `images/logo.png` directamente, se actualiza en toda la web

## Fotos pendientes — index.html
Las fotos van en la raíz del proyecto (no en /images/) con el nombre exacto del HTML

**Hero (3 fotos):**
- `foto-principal.jpg` — foto grande izquierda (2 filas): **800×1200px**, object-fit: cover
- `foto-hero-2.jpg` — foto pequeña arriba derecha: **800×600px**, object-fit: cover
- `foto-hero-3.jpg` — foto pequeña abajo derecha: **800×600px**, object-fit: cover

**Colecciones (5 tarjetas):**
- `coleccion-signature.jpg` — card grande (card-1): **800×900px**, object-fit: cover
- `coleccion-nupcial.jpg` — card pequeña: **800×600px**, object-fit: cover
- `coleccion-esmeraldas.jpg` — card pequeña: **800×600px**, object-fit: cover
- `coleccion-zafiros.jpg` — card pequeña: **800×600px**, object-fit: cover
- `coleccion-gemas.jpg` — card pequeña: **800×600px**, object-fit: cover

## Sección Nuestra Historia — index.html
- Imagen: `images/historia-tienda.png` — implementada (foto fachada años 90)
- Layout: grid `auto 1fr`, columna izquierda se ajusta al ancho de la imagen
- story-frame: `background: var(--lilac-mist)`, `padding: 3rem 2rem 3rem 3rem`
- story-img-wrap: `background: var(--off-white)`, `padding: 20px`, borde decorativo `::before { inset: 0 }`
- Imagen: `height: 560px; width: auto` (desktop) / `height: auto; width: 100%; max-height: 380px` (mobile)
- Badge "30+ Años": dentro de story-img-wrap, `bottom:0; right:0; transform: translate(35%,35%)`, 75×75px

## Publicación & SEO
- Hosting recomendado: GitHub → Netlify (gratis) → dominio propio
- `sitemap.xml` y `robots.txt` generados ✅
- Meta descriptions añadidas en todas las páginas ✅
- Pendiente: dar de alta en Google Search Console una vez publicada
- Pendiente: actualizar dominio en `sitemap.xml` y `robots.txt` cuando esté decidido

## Marcas (sección en index.html)
- Sección `.section-brands` entre Colecciones y Nuestra Historia
- **Joyería** (alfabético): Argent Basic, Bohemme, Leave, Raive, Uno de 50, Victoria Cruz
- **Relojería** (alfabético): Bauhaus, Bering, Maserati, Seiko
- Cada card tiene: imagen (placeholder lila hasta tener foto/logo) + nombre + subtítulo editable + materiales
- Imágenes de marcas irán en `images/brands/` cuando estén disponibles
- Las fotos de colecciones (404 actuales) se ocultan automáticamente hasta que existan

## Notas de estilo
- Preferencia: respuestas concisas en español
