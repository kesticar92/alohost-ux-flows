# AloHost — UX Flow Prototypes

Prototipos interactivos de UX/UI para **AloHost**, la plataforma inteligente de gestión de alojamientos turísticos con IA integrada (**Aloy**).

> **Live Demo:** [https://uxalohost.netlify.app](https://uxalohost.netlify.app)

---

## Descripción del Proyecto

AloHost es una plataforma multi-canal que automatiza la operación de alojamientos turísticos mediante **Aloy**, un agente de IA que interactúa directamente con los huéspedes, eliminando la necesidad de comunicación constante del anfitrión.

Este repositorio contiene los **prototipos UX de alta fidelidad** en HTML/CSS/JS que simulan los flujos completos de las 4 plataformas + onboarding:

| Plataforma | Archivo | Pantallas | Descripción |
|---|---|---|---|
| **Design System** | `design-system.html` | — | Tipografía, colores, componentes, iconografía |
| **Super Admin — Web** | `superadmin.html` | 7 | Panel de control total de la plataforma |
| **Admin — Web** | `admin.html` | 9 | Propiedades, reservas, calendario, IA, chapas digitales |
| **Onboarding Admin** | `admin-onboarding.html` | 10 | Registro, configuración de propiedades y OTAs |
| **Huésped — Web Móvil** | `guest-mobile.html` | 17 | Experiencia completa del huésped con Aloy |
| **App Admin — Móvil** | `admin-app.html` | 6 | Notificaciones y acciones rápidas |
| **Mapa de Flujos** | `flowmap.html` | — | Vista general del ecosistema y journeys |

---

## Funcionalidades Clave

### Agente IA "Aloy"
- Presente en toda la experiencia del huésped (splash, check-in, chat, servicios, check-out)
- Saludo inteligente por hora del dispositivo (Buenos días / tardes / noches)
- Asiste en registro de huéspedes adicionales
- Confirma pagos y servicios en tiempo real
- Disponible 24/7 desde el chat integrado

### Mockups iOS + Android
- Cada pantalla del huésped muestra **dos dispositivos lado a lado**
- **iOS:** Dynamic Island, status bar con LTE/WiFi
- **Android:** Camera hole-punch, status bar con 5G
- Contenido **scrolleable** como en un dispositivo real (max-height 720px)

### Check-in Inteligente con ICR
- **Flujo reordenado:** Primero la cámara (foto documento + selfie), luego los datos
- El sistema **ICR** (Reconocimiento Inteligente de Caracteres) extrae nombre, apellidos, documento y nacionalidad automáticamente
- El huésped solo confirma los datos y agrega email + teléfono
- Reduce el tiempo de check-in un 70%

### Tratamiento de Datos Personales
- Pantalla de consentimiento obligatorio (Ley 1581 de 2012, Colombia)
- Secciones **colapsables** ("Datos que recopilamos" / "Para qué usamos tus datos")
- Checkboxes de autorización: tratamiento de datos, términos, marketing opcional

### Registro Multi-Huésped
- Detecta cantidad de huéspedes desde la OTA/iCal (campo bloqueado) o permite input manual (reserva directa)
- Cada huésped adulto debe completar: datos, foto ID, selfie, firma
- Menores solo requieren datos básicos
- Opciones de registro: enviar link por WhatsApp o registrar desde el mismo dispositivo

### Cobro por OTA vs Reserva Directa
- **Reserva via Airbnb:** No cobra directamente al huésped. Notifica al anfitrión y gestiona el cobro a través de Airbnb (respeta políticas de la plataforma)
- **Reserva Directa:** Cobra directamente por la pasarela de pago integrada (Visa, Nequi, PSE)

### Pasarela de Pago
- Resumen del servicio con detalles y precio total
- Métodos de pago: Tarjeta de crédito/débito, Nequi, PSE
- Badge de seguridad SSL
- Pantalla de confirmación exitosa con mensaje de Aloy

### Modo Día / Noche del Huésped
- Toggle sol/luna en el Home Hub del huésped
- Respeta `prefers-color-scheme` del dispositivo
- Mockup de comparación: modo noche y modo día lado a lado

### Calendario Multi-Propiedad
- Vista estilo Airbnb con barras de reserva por OTA
- Colores diferenciados por origen (Airbnb, Booking, VRBO, Directo)

### Control de Acceso & Chapas Inteligentes
- Integración con TTlock y YaleConnect
- Generación automática de códigos de acceso
- Instrucciones manuales para propiedades sin chapa electrónica

### Adaptación por OTA
- Colores de la interfaz se adaptan al origen de la reserva
- Badge visual indicando la fuente (Airbnb, Booking, iCal, Directo)
- Saludos personalizados si la OTA proporciona el nombre del huésped

### Cumplimiento Legal (Colombia)
- Integración con SIRE (Migración Colombia)
- Tarjeta de Registro de Alojamiento (TRA)
- Validación de identidad biométrica

### Monetización
- Servicios extra: Early check-in, Late check-out, Huésped adicional, Transporte, Limpieza
- Flujo de compra completo con pasarela de pago
- Diferenciación OTA vs Directa para respetar políticas de plataformas

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
├── admin.html                # Flujo Admin/Anfitrión (9 pantallas)
├── admin-onboarding.html     # Flujo Onboarding Admin (10 pantallas)
├── guest-mobile.html         # Flujo Huésped Móvil (17 pantallas)
├── admin-app.html            # Flujo App Admin Notificaciones (6 pantallas)
├── flowmap.html              # Mapa de flujos del ecosistema
├── theme.css                 # Variables CSS: colores Airbnb, fonts Apple
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
npm install -g netlify-cli
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

- **Modo Día:** Fondos claros, texto oscuro, cards con bordes suaves y sombras
- **Modo Noche:** Fondos oscuros, texto claro, cards translúcidas

Este toggle afecta únicamente los mockups ilustrativos, no la página contenedora.

Además, dentro del flujo del huésped (Home Hub), el usuario final puede cambiar entre modo día y modo noche con un toggle integrado en la interfaz.

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

### Admin / Anfitrión (9 pantallas)
1. Dashboard del Anfitrión
2. Gestión de Propiedades
3. Calendario Multi-Propiedad (estilo Airbnb)
4. Detalle de Reserva
5. Check-in Automatizado
6. Servicios Extra (Monetización)
7. Panel del Agente Aloy
8. Cumplimiento Legal SIRE/TRA
9. **Control de Acceso & Chapas Inteligentes** (TTlock, YaleConnect, manual)

### Onboarding Admin (10 pantallas)
1. Registro de Cuenta
2. Datos del Negocio (NIT, RUT)
3. Conectar OTAs
4. Agregar Propiedades (importar o manual)
5. Configurar Propiedad — Datos Básicos
6. Configurar Propiedad — Amenidades
7. Configurar Propiedad — Normas y Horarios
8. Personalizar por OTA
9. Configuración del Agente Aloy
10. Dashboard Listo

### Huésped Móvil (17 pantallas)
| # | Pantalla | Descripción |
|---|---|---|
| 0 | **Splash** | Precarga con marca AloHost, saludo inteligente por hora del dispositivo y OTA |
| 1 | **Welcome Link** | Landing personalizado con datos de reserva y presentación de Aloy |
| 1b | **Privacidad** | Consentimiento de tratamiento de datos (Ley 1581/2012), secciones colapsables |
| 1c | **Huéspedes** | Cantidad de huéspedes (OTA bloqueado / Directa editable), registro multi-huésped, cobro OTA vs Directa |
| 2 | **Verificación ID** | Foto de documento + selfie biométrica (ANTES de datos personales) |
| 3 | **Datos (ICR)** | Formulario auto-completado por ICR/OCR, solo pide email + teléfono |
| 4 | **Contrato** | Firma digital del contrato de hospedaje |
| 5 | **Home Hub** | Centro de la estadía: acceso, WiFi, acciones rápidas, toggle día/noche |
| 5a | **Dirección** | Mapa, dirección exacta, botón "Abrir en Google Maps" |
| 5b | **Normas** | Horarios, reglas de la casa, depósito de seguridad |
| 5c | **Emergencia** | Contactos de emergencia, botones de acción rápida |
| 5d | **Acceso** | Instrucciones con chapa digital (código + video) o acceso manual (texto + fotos) |
| 6 | **Chat Aloy** | Chat con IA, sugerencias rápidas, confirmaciones inline |
| 7 | **Servicios** | Early check-in, late checkout, transporte, limpieza, huésped extra |
| 7b | **Pago** | Pasarela de pago (Visa, Nequi, PSE) + confirmación exitosa |
| 8 | **Check-out** | Resumen de gastos, calificación, despedida personalizada |

### App Admin (6 pantallas)
1. Home — Vista Rápida
2. Centro de Notificaciones
3. Escalación IA — Respuesta Rápida
4. Acciones Rápidas
5. Reservas — Vista Rápida
6. Push Notifications

---

## Flujo de Cobro por Origen de Reserva

```
┌─────────────────────┐     ┌──────────────────────────────┐
│  Reserva via Airbnb  │     │    Reserva Directa / Otra    │
│  (Booking, VRBO...)  │     │                              │
├─────────────────────┤     ├──────────────────────────────┤
│ ❌ NO cobra directo  │     │ ✅ Cobra directo en AloHost  │
│ ✅ Permite registro  │     │ ✅ Pasarela: Visa/Nequi/PSE  │
│ ✅ Notifica anfitrión│     │ ✅ Confirmación con Aloy     │
│ ✅ Cobro via OTA     │     │                              │
│    (modif. reserva)  │     │                              │
└─────────────────────┘     └──────────────────────────────┘
```

Esto respeta las políticas de cada plataforma OTA que prohíben cobros adicionales fuera de su sistema.

---

## Autor

**LOFTHOUSE S.A.S**

---

## Licencia

Todos los derechos reservados. Este proyecto es un prototipo de UX/UI propietario. No se permite la reproducción, distribución o uso comercial sin autorización expresa.
