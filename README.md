# AloHost — UX Flow Prototypes

Prototipos interactivos de UX/UI para **AloHost**, la plataforma inteligente de gestión de alojamientos turísticos con IA integrada.

> **Live Demo:** [https://uxalohost.netlify.app](https://uxalohost.netlify.app)

---

## Descripción del Proyecto

AloHost es una plataforma multi-canal que automatiza la operación de alojamientos turísticos mediante un **agente de IA** que interactúa directamente con los huéspedes, eliminando la necesidad de comunicación constante del anfitrión.

Este repositorio contiene los **prototipos UX de alta fidelidad** en HTML/CSS/JS que simulan los flujos completos de las 4 plataformas + el onboarding del sistema:

| Plataforma | Archivo | Descripción |
|---|---|---|
| **Design System** | `design-system.html` | Sistema de diseño: tipografía, colores, componentes, iconografía |
| **Super Admin — Web** | `superadmin.html` | Panel de control total de la plataforma (7 pantallas) |
| **Admin — Web** | `admin.html` | Panel del anfitrión: propiedades, reservas, calendario, IA (8 pantallas) |
| **Onboarding Admin** | `admin-onboarding.html` | Flujo de registro, configuración de propiedades y OTAs (10 pantallas) |
| **Huésped — Web Móvil** | `guest-mobile.html` | Experiencia completa del huésped con IA (8 pantallas) |
| **App Admin — Móvil** | `admin-app.html` | App de notificaciones y acciones rápidas (6 pantallas) |
| **Mapa de Flujos** | `flowmap.html` | Vista general del ecosistema y journeys de usuario |

---

## Funcionalidades Clave Diseñadas

- **Agente IA "Aloy"** — Presente en toda la experiencia del huésped (check-in, chat, servicios, check-out)
- **Check-in automático** — Validación de identidad biométrica, registro SIRE/TRA, firma digital
- **Calendario multi-propiedad** — Vista estilo Airbnb con barras de reserva por OTA
- **Adaptación por OTA** — Colores e interfaces que se adaptan a Airbnb, Booking, VRBO, Stays, Directo
- **Monetización** — Venta de servicios extra (transporte, limpieza, late checkout)
- **Cumplimiento legal** — Integración con SIRE y TRA (Migración Colombia)
- **Onboarding guiado** — Wizard de 10 pasos para registro y configuración del anfitrión
- **Modo Día/Noche** — Toggle para previsualizar los mockups en ambos modos

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de los prototipos |
| CSS3 (Variables) | Design system adaptativo con modo claro/oscuro |
| JavaScript (Vanilla) | Interactividad, toggle de preview, renderizado de iconos |
| SVG Icons | Iconografía estilo Apple SF Symbols (stroke-based) |
| Google Fonts | Inter como fallback del sistema Apple |
| Netlify | Hosting y deploy automático desde GitHub |

---

## Estructura del Proyecto

```
alohost-ux-flows/
├── index.html                # Hub de entrada con acceso a todas las vistas
├── design-system.html        # Sistema de diseño completo
├── superadmin.html           # Flujo Super Admin (7 pantallas)
├── admin.html                # Flujo Admin/Anfitrión (8 pantallas)
├── admin-onboarding.html     # Flujo Onboarding Admin (10 pantallas)
├── guest-mobile.html         # Flujo Huésped Móvil (8 pantallas)
├── admin-app.html            # Flujo App Admin Notificaciones (6 pantallas)
├── flowmap.html              # Mapa de flujos del ecosistema
├── theme.css                 # Variables CSS: colores Airbnb, fonts Apple, dark mode
├── theme.js                  # Controlador de tema (light por defecto)
├── icons.css                 # Estilos base para iconos SVG
├── icons.js                  # Librería de iconos SVG + render automático
├── preview-toggle.css        # Estilos del switcher Modo Día/Noche para mockups
├── preview-toggle.js         # Lógica del toggle de preview
├── netlify.toml              # Configuración de deploy en Netlify
└── README.md                 # Esta documentación
```

---

## Instalación Local

### Prerrequisitos

- Un navegador web moderno (Chrome, Safari, Firefox, Edge)
- No requiere Node.js, npm, ni ningún build tool

### Pasos

1. **Clonar el repositorio:**

```bash
git clone https://github.com/kesticar92/alohost-ux-flows.git
cd alohost-ux-flows
```

2. **Abrir en el navegador:**

```bash
open index.html
```

O simplemente arrastra `index.html` a tu navegador.

3. **Navegar las vistas** desde el menú superior o desde el hub de `index.html`.

> No se requiere servidor local. Todos los archivos son estáticos y funcionan directamente desde el sistema de archivos.

---

## Deploy en Netlify

El proyecto está configurado para deploy automático en Netlify.

### Deploy automático (recomendado)

1. Ve a [app.netlify.com](https://app.netlify.com)
2. **Add new site** → **Import an existing project**
3. Selecciona **GitHub** → busca `alohost-ux-flows`
4. Configuración:
   - **Branch:** `main`
   - **Build command:** *(vacío — es un sitio estático)*
   - **Publish directory:** `.`
5. Click en **Deploy site**

### Deploy manual

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.
```

### Configuración incluida (`netlify.toml`)

- Publish directory: raíz del proyecto
- Headers de seguridad (X-Frame-Options, X-Content-Type-Options)
- Cache: `must-revalidate` para servir siempre la última versión

---

## Acceso en Línea

| Vista | URL |
|---|---|
| Hub Principal | [uxalohost.netlify.app](https://uxalohost.netlify.app) |
| Design System | [/design-system.html](https://uxalohost.netlify.app/design-system.html) |
| Super Admin | [/superadmin.html](https://uxalohost.netlify.app/superadmin.html) |
| Admin Panel | [/admin.html](https://uxalohost.netlify.app/admin.html) |
| Onboarding Admin | [/admin-onboarding.html](https://uxalohost.netlify.app/admin-onboarding.html) |
| Huésped Móvil | [/guest-mobile.html](https://uxalohost.netlify.app/guest-mobile.html) |
| App Admin | [/admin-app.html](https://uxalohost.netlify.app/admin-app.html) |
| Mapa de Flujos | [/flowmap.html](https://uxalohost.netlify.app/flowmap.html) |

---

## Design System

### Tipografía
- **Primaria:** Apple System Font Stack (`-apple-system, BlinkMacSystemFont, 'SF Pro Text'...`)
- **Fallback:** Inter (Google Fonts)
- **Monospace:** SF Mono

### Paleta de Colores
- **Primario:** `#FF385C` (Airbnb Red)
- **Acento:** `#008489` (Airbnb Teal)
- **Éxito:** `#008A05`
- **Peligro:** `#C13515`
- **Advertencia:** `#E07912`

### Colores por OTA
| OTA | Color | Uso |
|---|---|---|
| Airbnb | `#FF385C` | Reservas provenientes de Airbnb |
| Booking.com | `#003580` | Reservas provenientes de Booking |
| VRBO | `#3B5998` | Reservas provenientes de VRBO |
| Expedia | `#FBCE00` | Reservas provenientes de Expedia |
| Stays PMS | `#6C5CE7` | Reservas del channel manager |
| Directo | `#008489` | Reservas directas |

### Iconografía
- SVG stroke-based (estilo Apple SF Symbols)
- `stroke-width: 1.5`, `stroke-linecap: round`, `stroke-linejoin: round`
- Sin relleno (`fill: none`)

---

## Preview Modo Día / Noche

Cada vista incluye un **toggle "Modo Día / Modo Noche"** debajo de la navegación que permite previsualizar cómo se verían las interfaces en ambos modos:

- **Modo Día:** Fondos claros, texto oscuro, sidebar blanco
- **Modo Noche:** Fondos oscuros, texto claro, sidebar negro

Este toggle afecta únicamente los mockups ilustrativos, no la página contenedora.

---

## Pantallas por Flujo

### Super Admin (7 pantallas)
1. Login con 2FA
2. Dashboard Global
3. Gestión de Cuentas Admin
4. SIRE / TRA (Cumplimiento Legal)
5. Suscripciones
6. Analítica Global
7. Configuración del Agente IA

### Admin / Anfitrión (8 pantallas)
1. Dashboard del Anfitrión
2. Gestión de Propiedades
3. Calendario Multi-Propiedad (estilo Airbnb)
4. Detalle de Reserva
5. Check-in Automatizado
6. Servicios Extra (Monetización)
7. Panel del Agente IA
8. Cumplimiento Legal SIRE/TRA

### Onboarding Admin (10 pantallas)
1. Registro de Cuenta
2. Datos del Negocio (NIT, RUT)
3. Conectar OTAs
4. Agregar Propiedades (importar o manual)
5. Configurar Propiedad — Datos Básicos
6. Configurar Propiedad — Amenidades
7. Configurar Propiedad — Normas y Horarios
8. Personalizar por OTA
9. Configuración del Agente IA
10. Dashboard Listo

### Huésped Móvil (8 pantallas)
1. Welcome Link Personalizado
2. Check-in — Datos Personales
3. Verificación de Identidad (Biométrica)
4. Firma de Contrato Digital
5. Home Hub de la Estadía
6. Chat con Aloy IA
7. Servicios Extra Disponibles
8. Check-out Automatizado

### App Admin (6 pantallas)
1. Home — Vista Rápida
2. Centro de Notificaciones
3. Escalación IA — Respuesta Rápida
4. Acciones Rápidas
5. Reservas — Vista Rápida
6. Push Notifications

---

## Autor

**LOFTHOUSE S.A.S**

---

## Licencia

Todos los derechos reservados. Este proyecto es un prototipo de UX/UI propietario. No se permite la reproducción, distribución o uso comercial sin autorización expresa.
