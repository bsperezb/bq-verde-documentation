# BAQ Verde - Frontend (Observatorio Ambiental)

---

## 📝 Información General

**Nombre del Proyecto:** BAQ Verde - Observatorio Ambiental de Barranquilla  
**Framework:** Astro 5.13.7  
**Modo:** SSR (Server-Side Rendering)  
**Puerto:** 4321  
**Node Adapter:** Standalone

### Descripción

Plataforma web del Observatorio Ambiental de Barranquilla que presenta indicadores ambientales, monitoreo de calidad del aire, mapas interactivos, documentos y contenido educativo sobre el medio ambiente urbano. El proyecto forma parte de la iniciativa "Barranquilla Verde" del Establecimiento Público Ambiental (EPA).

### Propósito

Proporcionar acceso público a información ambiental de la ciudad, incluyendo:

- Indicadores de Calidad Ambiental Urbana (ICAU)
- Monitoreo de calidad del aire en tiempo real
- Geoportal con visualización de estaciones de monitoreo
- Educación ambiental y participación ciudadana
- Documentos técnicos y recursos informativos

---

## 🏗️ Arquitectura

### Patrón de Diseño

El proyecto utiliza la arquitectura **Islands** de Astro con SSR:

```
Frontend (Astro SSR)
├── Server-Side Rendering
├── Static Site Generation (para contenido)
├── Interactive Islands (componentes dinámicos)
└── API Integration (Backend FastAPI)
```

### Características Técnicas

- **SSR (Server-Side Rendering)** con Astro
- **Adaptador Node.js** en modo standalone
- **Generación de contenido** desde colecciones Markdown
- **Componentes interactivos** con vanilla JavaScript
- **Mapas interactivos** con Leaflet
- **Diseño responsivo** con CSS personalizado
- **Integración API REST** con backend FastAPI
- **Middleware** para autenticación

### Flujo de Datos

```
Usuario → Astro SSR → Componentes → API Service → Backend (FastAPI) → MongoDB
                ↓
         Contenido Estático (Markdown)
                ↓
         Renderizado Híbrido (SSR + CSR)
```

---

## 🛠️ Tecnologías y Dependencias

### Framework Principal

```json
{
  "astro": "^5.13.7",
  "@astrojs/node": "^9.4.4"
}
```

**Astro 5.13.7** - Framework web moderno con:

- Server-Side Rendering
- Islands Architecture
- Generación de sitios estáticos
- Colecciones de contenido
- TypeScript nativo

### Librerías de Visualización

```json
{
  "leaflet": "^1.9.4"
}
```

**Leaflet** - Librería de mapas interactivos open-source para:

- Visualización del geoportal
- Marcadores de estaciones de monitoreo
- Capas personalizadas
- Interacción con mapas

### Herramientas de Desarrollo

```json
{
  "prettier": "^3.7.4",
  "prettier-plugin-astro": "^0.14.1",
  "@types/leaflet": "^1.9.20"
}
```

- **Prettier** - Formateador de código
- **TypeScript** - Tipado estático

---

## 📁 Estructura del Proyecto

```
baq-verde-frontend/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── ambiental_cards/  # Tarjetas de indicadores
│   │   ├── charts/           # Componentes de gráficos
│   │   ├── common/           # Componentes comunes
│   │   ├── document_sections/ # Secciones de documentos
│   │   ├── home_sections/    # Secciones del home
│   │   ├── maps/             # Componentes de mapas
│   │   ├── notice_sections/  # Secciones de noticias
│   │   └── participations_sections/ # Participación
│   │
│   ├── content/              # Contenido estático
│   │   ├── config.ts         # Configuración de colecciones
│   │   └── icau/             # Contenido ICAU en Markdown
│   │
│   ├── data/                 # Datos estáticos
│   │   ├── categories.js     # Categorías de indicadores
│   │   └── indicatorsConfig.js # Configuración de indicadores
│   │
│   ├── layouts/              # Layouts principales
│   │   ├── DashboardLayout.astro  # Layout del dashboard
│   │   ├── Layout.astro      # Layout general
│   │   ├── LayoutHome.astro  # Layout del home
│   │   └── LayoutICAU.astro  # Layout para páginas ICAU
│   │
│   ├── lib/                  # Servicios y utilidades
│   │   ├── api.js            # Cliente API genérico
│   │   ├── contentservice.js # Servicio de contenidos
│   │   ├── indicatorsService.js # Servicio de indicadores
│   │   ├── indicatorsService.server.js # SSR indicators
│   │   ├── stationsService.js # Servicio de estaciones
│   │   └── subcategoryservice.js # Servicio subcategorías
│   │
│   ├── pages/                # Páginas de la aplicación
│   │   ├── ICAU/             # Páginas de indicadores ICAU
│   │   │   ├── [slug].astro  # Página dinámica ICAU
│   │   │   ├── agua/         # Indicadores de agua
│   │   │   ├── aire/         # Indicadores de aire
│   │   │   ├── fauna/        # Indicadores de fauna
│   │   │   ├── flora/        # Indicadores de flora
│   │   │   ├── ordenamiento/ # Ordenamiento territorial
│   │   │   ├── respel/       # Residuos peligrosos
│   │   │   └── suelo/        # Indicadores de suelo
│   │   │
│   │   ├── categorias/       # Páginas de categorías
│   │   │
│   │   ├── dashboard/        # Dashboard administrativo
│   │   │   ├── document/     # Gestión de documentos
│   │   │   ├── indicators/   # Gestión de indicadores
│   │   │   ├── news/         # Gestión de noticias
│   │   │   ├── stake/        # Gestión de estaciones
│   │   │   └── stations/     # Gestión de estaciones
│   │   │
│   │   ├── news/             # Páginas de noticias
│   │   ├── participations/   # Participación ciudadana
│   │   │
│   │   ├── 404.astro         # Página de error 404
│   │   ├── documents.astro   # Página de documentos
│   │   ├── index.astro       # Página principal
│   │   ├── login.astro       # Página de inicio de sesión
│   │   ├── maps.astro        # Geoportal
│   │   ├── news.astro        # Listado de noticias
│   │   └── participation.astro # Educación ambiental
│   │
│   ├── styles/               # Estilos CSS
│   │   ├── common/           # Estilos comunes
│   │   ├── carousel.css      # Estilos del carrusel
│   │   ├── fonts.css         # Fuentes tipográficas
│   │   ├── global.css        # Estilos globales
│   │   ├── icau-*.css        # Estilos específicos ICAU
│   │   ├── layout.css        # Estilos del layout
│   │   ├── layout-icau.css   # Layout específico ICAU
│   │   ├── participation-page.css # Estilos participación
│   │   ├── tokens.css        # Tokens de diseño
│   │   └── utilities.css     # Utilidades CSS
│   │
│   ├── utils/                # Utilidades JavaScript
│   │   └── slugify.js        # Generación de slugs
│   │
│   └── middleware.js         # Middleware de autenticación
│
├── public/                   # Archivos estáticos
│   ├── fonts/                # Fuentes personalizadas
│   ├── icons/                # Iconos SVG
│   ├── images/               # Imágenes
│   │   ├── bg/               # Fondos
│   │   └── svg/              # SVG decorativos
│   └── scripts/              # Scripts externos
│
├── .env                      # Variables de entorno
├── .gitignore
├── .prettierrc               # Configuración Prettier
├── astro.config.mjs          # Configuración de Astro
├── Dockerfile                # Contenedor Docker
├── package.json              # Dependencias NPM
├── README.md
└── tsconfig.json             # Configuración TypeScript
```

---

## ⚙️ Configuración

### Variables de Entorno (`.env`)

```env
PUBLIC_URL_SERVER=https://bq-verde-observatorio-api-j4vxg.ondigitalocean.app
```

**Variables:**

- `PUBLIC_URL_SERVER` - URL base del backend API

### Configuración de Astro (`astro.config.mjs`)

```javascript
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  middleware: true, // Habilitar middleware
  output: "server", // Modo SSR
  adapter: node({
    mode: "standalone", // Servidor independiente
    server: {
      port: process.env.PORT || 4321,
      host: "0.0.0.0", // Escuchar en todas las interfaces
    },
  }),
});
```

**Características:**

- **Middleware habilitado** para autenticación
- **Modo servidor** (SSR) para renderizado dinámico
- **Adaptador Node.js** standalone
- **Puerto configurable** (por defecto 4321)

### TypeScript (`tsconfig.json`)

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

### Prettier (`.prettierrc`)

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-astro"]
}
```

---

## 🎨 Layouts

El proyecto utiliza 4 layouts principales:

### 1. Layout.astro (General)

**Uso:** Páginas de categorías, documentos, educación ambiental

**Características:**

- Barras informativas superiores (GOV.CO, Alcaldía)
- Navegación principal sticky con logo
- Hero section con imagen dinámica según ruta
- Footer institucional con enlaces y redes sociales
- Menú hamburguesa responsive

**Estructura:**

```astro
<Layout title="Título de la página">
  <slot /> <!-- Contenido de la página -->
</Layout>
```

**Navegación:**

- Inicio
- Educación Ambiental
- GeoPortal
- Documentos

**Fondos dinámicos:**

- `/participation` → educacion.png
- `/maps` → geoportal.png
- Otros → fondolayout1.jpg o fondolayout2.jpg (aleatorio)

### 2. LayoutHome.astro

**Uso:** Página principal (index)

**Características:**

- Hero destacado con carrusel de noticias
- Sección de indicadores ambientales con filtros
- Decoraciones temáticas (hojas, elementos naturales)
- Diseño optimizado para conversión

### 3. LayoutICAU.astro

**Uso:** Páginas de indicadores ICAU

**Características:**

- Navegación contextual por categoría
- Breadcrumbs para ubicación
- Sidebar con enlaces relacionados
- Visualización de datos y gráficos
- Estilos específicos por categoría ICAU

### 4. DashboardLayout.astro

**Uso:** Panel de administración

**Características:**

- Sidebar de navegación administrativa
- Protección por autenticación
- Gestión de contenidos
- Formularios CRUD
- Tablas de datos

---

## 📄 Páginas Principales

### Home (`/`)

**Archivo:** `src/pages/index.astro`

**Funcionalidad:**

- Sección de bienvenida (TitleSection)
- Filtros de categorías ambientales
- Carrusel de indicadores con navegación
- Sistema de filtrado dinámico por categoría
- Tarjetas interactivas con navegación a detalles

**Categorías de Indicadores:**

- Fauna
- Flora
- Aire
- Agua
- Suelo
- Residuos (con subcategoría RESPEL)
- Ordenamiento Territorial

**Interactividad:**

- Filtrado por categoría
- Navegación del carrusel
- Modal de RESPEL (Residuos Peligrosos)
- Botón "Volver" para subcategorías

### Geoportal (`/maps`)

**Archivo:** `src/pages/maps.astro`

**Funcionalidad:**

- Mapa interactivo con Leaflet
- Marcadores de estaciones de monitoreo
- Popup con información de cada estación
- Filtros por tipo de estación
- Visualización de datos en tiempo real

### Documentos (`/documents`)

**Archivo:** `src/pages/documents.astro`

**Funcionalidad:**

- Listado de documentos técnicos
- Filtros por categoría
- Descarga de PDFs, Excel
- Información del autor y fecha
- Búsqueda por título

### Educación Ambiental (`/participation`)

**Archivo:** `src/pages/participation.astro`

**Funcionalidad:**

- Programas educativos
- Talleres y eventos
- Material didáctico
- Formulario de inscripción
- Galería de actividades

### Noticias (`/news`)

**Archivo:** `src/pages/news.astro`

**Funcionalidad:**

- Listado de noticias ambientales
- Categorías de noticias
- Búsqueda por texto
- Paginación
- Vista detallada de noticia

### ICAU (Indicadores)

**Ruta dinámica:** `/ICAU/[categoria]/[slug]`

**Archivo:** `src/pages/ICAU/[slug].astro`

**Categorías:**

- `/ICAU/agua/*` - Indicadores de agua
- `/ICAU/aire/*` - Indicadores de aire
- `/ICAU/fauna/*` - Indicadores de fauna
- `/ICAU/flora/*` - Indicadores de flora
- `/ICAU/suelo/*` - Indicadores de suelo
- `/ICAU/respel/*` - Residuos peligrosos
- `/ICAU/ordenamiento/*` - Ordenamiento territorial

**Funcionalidad:**

- Visualización de datos históricos
- Gráficos interactivos
- Tablas de datos
- Metodología del indicador
- Fuentes de información
- Descargar datos

### Dashboard (`/dashboard`)

**Archivo:** `src/pages/dashboard/index.astro`

**Protección:** Requiere autenticación

**Secciones administrativas:**

#### `/dashboard/news`

- Crear, editar, eliminar noticias
- Subir imágenes
- Categorizar noticias

#### `/dashboard/document`

- Gestión de documentos
- Subir PDFs, Excel
- Metadatos del documento

#### `/dashboard/stations`

- CRUD de estaciones de monitoreo
- Ubicación GPS
- Configuración de sensores
- Asignación de ICAU

#### `/dashboard/indicators`

- Gestión de indicadores ICAU
- Subcategorías
- Contenido dinámico

---

## 🧩 Componentes

### Componentes Comunes (`src/components/common/`)

#### NavFilters.astro

Filtros de navegación para categorías.

**Props:**

- `options: string[]` - Lista de opciones
- `active: string` - Opción activa por defecto
- `id: string` - ID del componente

**Eventos:**

- `filter-change` - Emitido al cambiar filtro

**Uso:**

```astro
<NavFilters
  id="category-filters"
  options={["Fauna", "Flora", "Aire"]}
  active="Fauna"
/>
```

### Componentes de Indicadores (`src/components/ambiental_cards/`)

#### IndicatorsCarousel.astro

Carrusel de tarjetas de indicadores ambientales.

**Props:**

- `indicators: Indicator[]` - Lista de indicadores

**Estructura de Indicator:**

```typescript
interface Indicator {
  title: string;
  description: string;
  category: string;
  icon: string;
  slug: string;
  path: string;
  isRespelParent?: boolean;
}
```

**Características:**

- Navegación con flechas
- Scroll infinito
- Transiciones suaves
- Responsive

### Componentes de Mapas (`src/components/maps/`)

#### MapComponent.astro

Componente de mapa interactivo con Leaflet.

**Props:**

- `stations: Station[]` - Estaciones de monitoreo
- `center: [number, number]` - Centro del mapa
- `zoom: number` - Nivel de zoom

**Funcionalidad:**

- Inicialización de Leaflet
- Marcadores personalizados
- Popups informativos
- Capas de mapa

### Componentes de Secciones (`src/components/home_sections/`)

#### Section.astro

Sección de título y descripción para home.

**Props:**

- `title?: string` - Título de la sección
- `description?: string` - Descripción

### Componentes de Noticias (`src/components/notice_sections/`)

#### NewsCard.astro

Tarjeta de noticia.

**Props:**

```typescript
interface NewsCardProps {
  id: string;
  title: string;
  category: string;
  img_url?: string;
  created_at: string;
}
```

### Componentes de Gráficos (`src/components/charts/`)

Componentes para visualización de datos:

- Gráficos de líneas
- Gráficos de barras
- Gráficos de área
- Tablas de datos

---

## 🔧 Servicios y API

### Cliente API Base (`src/lib/api.js`)

Función genérica para llamadas a la API:

```javascript
export async function api(url, token, options = {}) {
  const headers = new Headers(options.headers || {});

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  if (!(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(API_BASE + url, {
    ...options,
    headers,
  });

  // Manejo de errores
  if (!response.ok) {
    // Extrae mensaje de error detallado
    throw new Error(errorMessage);
  }

  return response.json();
}
```

**Características:**

- Autenticación JWT automática
- Manejo de errores detallado
- Soporte para FormData
- Headers configurables

### Servicio de Estaciones (`src/lib/stationsService.js`)

```javascript
export async function getStations(token) {
  return api("/stations", token);
}

export async function getStation(id, token) {
  return api(`/stations/${id}`, token);
}
```

### Servicio de Indicadores (`src/lib/indicatorsService.js`)

```javascript
export async function getIcau(token) {
  return api("/icau", token);
}

export async function getStationData(stationId, token) {
  return api(`/station-data/${stationId}`, token);
}
```

### Servicio de Contenidos (`src/lib/contentservice.js`)

```javascript
export async function getContenidos(token) {
  return api("/contenidos", token);
}

export async function getContenidosBySubcategory(subcatId, token) {
  return api(`/contenidos/by-subcategory/${subcatId}`, token);
}

export async function createContenido(data, token) {
  return api("/contenidos", token, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
```

### Servicio de Subcategorías (`src/lib/subcategoryservice.js`)

```javascript
export async function getSubcategories(token) {
  return api("/icau_subcategories", token);
}

export async function getSubcategoriesByIcau(icauId, token) {
  return api(`/icau_subcategories/by-icau/${icauId}`, token);
}
```

---

## 🎨 Estilos y Diseño

### Sistema de Diseño

#### Tokens de Diseño (`src/styles/tokens.css`)

```css
:root {
  /* Colores principales */
  --color-primary: #279b48;
  --color-secondary: #1a7535;
  --color-accent: #34c759;

  /* Colores de fondo */
  --bg-light: #f8f9fa;
  --bg-white: #ffffff;

  /* Tipografía */
  --font-primary: "Volkswagen Serial Light", sans-serif;
  --font-heading: "Volkswagen Serial Heavy", sans-serif;

  /* Espaciado */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;

  /* Breakpoints */
  --bp-mobile: 768px;
  --bp-tablet: 1024px;
  --bp-desktop: 1440px;
}
```

### Fuentes Personalizadas

**Volkswagen Serial** - Familia tipográfica principal

Ubicación: `/public/fonts/`

- `volkswagen-serial-light-regular.ttf`
- `VolkswagenSerialHeavyRegular.ttf`

### Estilos Globales (`src/styles/global.css`)

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-primary);
  color: #333;
  line-height: 1.6;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  font-weight: 700;
}
```

### Estilos por Categoría ICAU

Cada categoría ICAU tiene estilos personalizados:

- `icaus-agua.css` - Temática azul para agua
- `icaus-aire.css` - Temática celeste para aire
- `icaus-fauna.css` - Temática verde oscuro para fauna
- `icaus-flora.css` - Temática verde brillante para flora
- `icaus-suelo.css` - Temática marrón para suelo
- `icaus-respel.css` - Temática naranja/rojo para residuos

### Utilidades CSS (`src/styles/utilities.css`)

Clases de utilidad para desarrollo rápido:

```css
/* Espaciado */
.mt-1 {
  margin-top: var(--space-xs);
}
.mb-2 {
  margin-bottom: var(--space-sm);
}
.p-3 {
  padding: var(--space-md);
}

/* Flexbox */
.flex {
  display: flex;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-column {
  flex-direction: column;
}

/* Grid */
.grid {
  display: grid;
}
.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}
.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

/* Visibilidad */
.hidden {
  display: none;
}
.mobile-only {
  display: block;
}
@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}
```

### Diseño Responsivo

**Breakpoints:**

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Estrategia:** Mobile-first design

---

## 📊 Sistema de Indicadores

### Estructura de Datos

Archivo: `src/data/indicatorsConfig.js`

```javascript
export const ALL_INDICATORS = [
  {
    title: "Nombre del Indicador",
    description: "Descripción detallada...",
    category: CATEGORIES.CATEGORIA,
    icon: "nombre-icono",
    slug: "slug-del-indicador",
    path: "/ICAU/categoria/slug",
    isRespelParent: false, // Opcional
  },
  // ... más indicadores
];
```

### Categorías

Archivo: `src/data/categories.js`

```javascript
export const CATEGORIES = {
  FAUNA: "Fauna",
  FLORA: "Flora",
  AIRE: "Aire",
  AGUA: "Agua",
  SUELO: "Suelo",
  RESIDUOS: "Residuos",
  ORDENAMIENTO: "Ordenamiento Territorial",
};
```

### Indicadores por Categoría

#### Fauna (3 indicadores)

1. Especímenes de la Fauna Silvestre Atendidos
2. Especímenes de la Fauna Silvestre Recuperados
3. Especímenes de la Fauna Silvestre Liberados y Reubicados

#### Aire (3 indicadores)

1. Calidad del Aire (PM10 y PM2.5)
2. Población Urbana Expuesta a Ruido
3. Tecnologías de Baja Emisión

#### Agua (3 indicadores)

1. Calidad del Agua Superficial
2. Consumo de Agua
3. Consumo de Energía

#### Flora (indicadores de vegetación urbana)

#### Suelo (indicadores de calidad del suelo)

#### Residuos (gestión de residuos urbanos)

#### Ordenamiento Territorial (indicadores urbanísticos)

---

## 🔐 Middleware de Autenticación

Archivo: `src/middleware.js`

```javascript
export function onRequest({ locals, request, cookies }, next) {
  // Verificar token de autenticación
  const token = cookies.get("token")?.value;

  // Rutas protegidas
  const protectedRoutes = ["/dashboard"];

  if (protectedRoutes.some((route) => request.url.includes(route))) {
    if (!token) {
      return Response.redirect(new URL("/login", request.url));
    }
  }

  // Agregar token a locals para uso en páginas
  locals.token = token;

  return next();
}
```

**Funcionalidad:**

- Verificación de token JWT en cookies
- Protección de rutas administrativas
- Redirección a login si no autenticado
- Token disponible en `Astro.locals.token`

---

## 🐳 Despliegue

### Docker

#### Dockerfile

```dockerfile
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine AS runtime

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
```

#### Construcción

```bash
docker build -t baq-verde-frontend .
```

#### Ejecución

```bash
docker run -d \
  --name baq-verde-web \
  -p 4321:4321 \
  -e PUBLIC_URL_SERVER=https://api.example.com \
  baq-verde-frontend
```

### Docker Compose

```yaml
version: "3.8"

services:
  frontend:
    build: .
    container_name: baq-verde-frontend
    ports:
      - "4321:4321"
    environment:
      - PUBLIC_URL_SERVER=https://api.example.com
      - HOST=0.0.0.0
      - PORT=4321
    restart: unless-stopped
```

### Despliegue Manual

#### 1. Instalación de Dependencias

```bash
npm install
```

#### 2. Construcción para Producción

```bash
npm run build
```

Esto genera la carpeta `dist/` con:

- Archivos estáticos en `dist/client/`
- Servidor SSR en `dist/server/`

#### 3. Iniciar Servidor

```bash
node ./dist/server/entry.mjs
```

### Variables de Entorno en Producción

```env
PUBLIC_URL_SERVER=https://bq-verde-observatorio-api-j4vxg.ondigitalocean.app
HOST=0.0.0.0
PORT=4321
```

### Nginx (Proxy Inverso)

```nginx
server {
    listen 80;
    server_name observatorio.barranquillaverde.gov.co;

    location / {
        proxy_pass http://localhost:4321;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Archivos estáticos con caché
    location /assets/ {
        proxy_pass http://localhost:4321;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Systemd Service

```ini
[Unit]
Description=BAQ Verde Frontend
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/baq-verde-frontend
Environment="PUBLIC_URL_SERVER=https://api.example.com"
Environment="HOST=0.0.0.0"
Environment="PORT=4321"
ExecStart=/usr/bin/node ./dist/server/entry.mjs
Restart=always

[Install]
WantedBy=multi-user.target
```

---

## 📜 Scripts NPM

Comandos disponibles en `package.json`:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "format": "prettier --write ."
  }
}
```

### Uso de Scripts

#### Desarrollo Local

```bash
npm run dev
```

Inicia servidor de desarrollo en http://localhost:4321 con hot reload.

#### Construcción para Producción

```bash
npm run build
```

Genera build optimizado en carpeta `dist/`.

#### Vista Previa de Producción

```bash
npm run preview
```

Inicia servidor de vista previa del build de producción.

#### Formatear Código

```bash
npm run format
```

Formatea todo el código con Prettier.

#### Comandos Astro

```bash
npm run astro -- --help
```

Accede a comandos CLI de Astro.

---

## 🔍 Características Especiales

### 1. Sistema de Contenido Markdown

El proyecto utiliza las **Colecciones de Contenido** de Astro para gestionar contenido estructurado en Markdown.

**Ubicación:** `src/content/icau/`

**Configuración:** `src/content/config.ts`

```typescript
import { defineCollection, z } from "astro:content";

const icauCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    icon: z.string(),
    publishedDate: z.date(),
  }),
});

export const collections = {
  icau: icauCollection,
};
```

**Uso en páginas:**

```astro
---
import { getCollection } from 'astro:content';

const icauEntries = await getCollection('icau');
---
```

### 2. Generación de Rutas Dinámicas

**Archivo:** `src/pages/ICAU/[slug].astro`

```astro
---
export async function getStaticPaths() {
  const icauEntries = await getCollection('icau');

  return icauEntries.map(entry => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<Layout>
  <Content />
</Layout>
```

### 3. Filtrado Interactivo sin Recarga

El home implementa filtrado de indicadores sin recargar la página:

```javascript
filterRoot.addEventListener("filter-change", (e) => {
  const selected = e.detail;
  const filtered = ALL_INDICATORS.filter((item) => item.category === selected);
  renderFilteredIndicators(filtered);
});
```

### 4. Carrusel de Indicadores

Sistema de carrusel personalizado sin librerías externas:

- Navegación con botones
- Scroll suave
- Centrado automático
- Responsive
- Touch events en móvil

### 5. Mapas Interactivos con Leaflet

Integración de Leaflet para visualización geoespacial:

```javascript
const map = L.map("map").setView([10.9685, -74.7813], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Agregar marcadores de estaciones
stations.forEach((station) => {
  L.marker([station.lat, station.lon])
    .bindPopup(`<b>${station.name}</b>`)
    .addTo(map);
});
```

### 6. Gestión de Estado en Cliente

Uso de eventos personalizados para comunicación entre componentes:

```javascript
// Emitir evento
const event = new CustomEvent("filter-change", {
  detail: selectedCategory,
});
element.dispatchEvent(event);

// Escuchar evento
element.addEventListener("filter-change", (e) => {
  console.log("Filtro cambiado:", e.detail);
});
```

---

## 📱 Diseño Responsivo

### Estrategia Mobile-First

El diseño comienza desde móvil y se expande para tablets y desktop.

```css
/* Estilos base (móvil) */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 768px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 3rem;
  }
}
```

### Navegación Responsiva

**Desktop:** Navegación horizontal visible
**Móvil:** Menú hamburguesa con overlay

```javascript
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  navOverlay.classList.toggle("active");
  document.body.style.overflow = nav.classList.contains("active")
    ? "hidden"
    : "";
});
```

### Imágenes Responsivas

```astro
<img
  src={heroImage}
  alt={title}
  loading="eager"
  fetchpriority="high"
/>
```

---

## ♿ Accesibilidad

### Principios de Accesibilidad

1. **Semántica HTML correcta**
   - Uso de `<header>`, `<nav>`, `<main>`, `<footer>`
   - Encabezados jerárquicos (`h1` → `h6`)

2. **Etiquetas ARIA**

   ```html
   <button aria-label="Menú" id="hamburger"></button>
   ```

3. **Contraste de colores**
   - Ratio mínimo 4.5:1 para texto normal
   - Ratio mínimo 3:1 para texto grande

4. **Navegación por teclado**
   - Tab navigation
   - ESC para cerrar modales
   - Enter para activar botones

5. **Textos alternativos**
   ```html
   <img src="..." alt="Descripción significativa" />
   ```

---

## 🎯 Optimización de Performance

### Técnicas Implementadas

1. **Lazy Loading de Imágenes**

   ```html
   <img loading="lazy" />
   ```

2. **Preload de Recursos Críticos**

   ```html
   <link rel="preload" href="/fonts/font.ttf" as="font" />
   ```

3. **Code Splitting**
   - Astro divide automáticamente el código por ruta

4. **Optimización de Imágenes**
   - WebP para navegadores modernos
   - Fallback a JPG/PNG

5. **Caché de Assets**
   - Headers de caché en archivos estáticos

6. **Minimización de CSS/JS**
   - Build automático minimiza archivos

### Métricas de Performance

**Objetivo:**

- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

---

## 🧪 Testing

### Testing Manual

Navegación completa de la aplicación verificando:

- Funcionalidad de filtros
- Navegación entre páginas
- Formularios
- Carga de datos de API

### Testing Responsivo

Verificar en diferentes tamaños de pantalla:

- 320px (móvil pequeño)
- 768px (tablet)
- 1024px (laptop)
- 1440px (desktop)

### Testing de Navegadores

Compatibilidad con:

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

---

## 📝 Mejores Prácticas

### Desarrollo

1. **Componentes reutilizables**
   - Crear componentes genéricos
   - Props bien documentados
   - Single Responsibility Principle

2. **Organización de archivos**
   - Agrupar por funcionalidad
   - Nomenclatura consistente
   - Comentarios en código complejo

3. **Gestión de estado**
   - Mantener estado local cuando sea posible
   - Usar eventos para comunicación entre componentes

4. **Performance**
   - Lazy loading de componentes pesados
   - Minimizar JavaScript en cliente
   - Aprovechar SSR de Astro

### Estilo de Código

1. **Formateo consistente**

   ```bash
   npm run format
   ```

2. **Nomenclatura**
   - camelCase para JavaScript
   - kebab-case para archivos
   - PascalCase para componentes

3. **Comentarios**
   ```javascript
   // Breve descripción de qué hace el código
   // No cómo lo hace (el código debe ser auto-explicativo)
   ```

---

## 🔄 Flujo de Trabajo

### Desarrollo Local

1. **Clonar repositorio**

   ```bash
   git clone <repository-url>
   cd baq-verde-frontend
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   ```bash
   cp .env.example .env
   # Editar .env con valores locales
   ```

4. **Iniciar desarrollo**

   ```bash
   npm run dev
   ```

5. **Acceder a la aplicación**
   ```
   http://localhost:4321
   ```

### Agregar Nueva Página

1. **Crear archivo en `src/pages/`**

   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   ---

   <Layout title="Nueva Página">
     <h1>Contenido de la página</h1>
   </Layout>
   ```

2. **Agregar enlace en navegación**
   ```astro
   <nav class="nav">
     <a href="/nueva-pagina">Nueva Página</a>
   </nav>
   ```

### Agregar Nuevo Componente

1. **Crear archivo en `src/components/`**

   ```astro
   ---
   interface Props {
     title: string;
     description?: string;
   }

   const { title, description } = Astro.props;
   ---

   <div class="component">
     <h2>{title}</h2>
     {description && <p>{description}</p>}
   </div>

   <style>
     .component {
       /* estilos */
     }
   </style>
   ```

2. **Usar en páginas**

   ```astro
   ---
   import MiComponente from '../components/MiComponente.astro';
   ---

   <MiComponente title="Título" description="Descripción" />
   ```

---

## 🐛 Debugging

### Logs en Desarrollo

```javascript
console.log("Debug info:", data);
```

### Astro Dev Toolbar

Astro incluye una toolbar de desarrollo con:

- Inspector de componentes
- Auditoría de accesibilidad
- Vista de islas interactivas

### Network Inspector

Verificar llamadas a API en DevTools:

- Status codes
- Tiempos de respuesta
- Datos enviados/recibidos

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [Astro Documentation](https://docs.astro.build/)
- [Leaflet Documentation](https://leafletjs.com/reference.html)
- [MDN Web Docs](https://developer.mozilla.org/)

### Herramientas

- [Astro DevTools](https://docs.astro.build/en/guides/dev-toolbar/)
- [Prettier](https://prettier.io/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

---

**Última actualización:** Enero 2026  
**Versión de la documentación:** 1.0  
**Framework:** Astro 5.13.7
