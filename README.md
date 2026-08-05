# Estudio Integral Contable SM

---

## Tecnologías

- [React 19](https://react.dev/)
- [Vite 8](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Firebase / Firestore](https://firebase.google.com/)
- [React Router DOM v7](https://reactrouter.com/)
- [Motion](https://motion.dev/) — animaciones
- [Lenis](https://lenis.darkroom.engineering/) — scroll suave
- [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)

---

## Requisitos previos

Asegurate de tener instalado:

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior (viene incluido con Node.js)
- Una cuenta de [Firebase](https://console.firebase.google.com/) con un proyecto creado y Firestore habilitado

---

## Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/<tu-usuario>/repo-estudioIntegralContableSM.git
cd repo-estudioIntegralContableSM
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las credenciales de tu proyecto de Firebase:

```env
VITE_API_KEY=tu_api_key
VITE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_PROJET_ID=tu_proyecto_id
VITE_STORAGE_BUCKET=tu_proyecto.firebasestorage.app
VITE_MESSAGING_SENDER_ID=tu_sender_id
VITE_APP_ID=tu_app_id
```

> Encontrás estos valores en la consola de Firebase: **Configuración del proyecto → General → Tu aplicación web**.

---

## Levantar el proyecto en desarrollo

```bash
npm run dev
```

El servidor de desarrollo se iniciará en `http://localhost:5173`.

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Genera la build de producción en la carpeta `dist/` |
| `npm run deploy` | Publica la build en GitHub Pages |

---

## Estructura del proyecto

```
src/
├── components/
│   ├── animations/     # Componentes de animación (Reveal, SplitText, etc.)
│   ├── layout/         # Navbar, Footer, CartWidget, etc.
│   ├── pages/          # Páginas principales (Home, Services, Contact, etc.)
│   ├── sections/       # Secciones reutilizables por página
│   └── ui/             # Componentes de interfaz genéricos
├── context/            # CartContext (estado global del carrito)
├── firebase/           # Configuración e inicialización de Firebase
├── hooks/              # Custom hooks (useFirestoreCollection, etc.)
├── lib/                # Utilidades y helpers
└── mock/               # Datos estáticos de prueba
```

---

## Rutas de la aplicación

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio |
| `/servicios/:categoria?` | Listado de servicios (con filtro por categoría opcional) |
| `/servicio/:id` | Detalle de un servicio |
| `/nosotros` | Página "Nosotros" |
| `/contacto` | Formulario de contacto |
| `/carrito` | Carrito de servicios |
| `/checkout` | Proceso de pago |
| `/respuesta/:id` | Página de respuesta / confirmación |

---

## Build de producción

```bash
npm run build
```

### Deploy en GitHub Pages

```bash
npm run deploy
```

> Requiere tener configurado el repositorio remoto en GitHub y el paquete `gh-pages` (ya incluido en devDependencies).

---

## Notas importantes

- El archivo `.env` **no debe subirse al repositorio**. Asegurate de que esté incluido en el `.gitignore`.
- La base URL de la aplicación está configurada como `/repo-estudioIntegralContableSM/` en `vite.config.js`. Si cambiás el nombre del repositorio, actualizá también ese valor.
- Firebase Firestore debe tener las reglas de seguridad correctamente configuradas antes de hacer el deploy a producción.
