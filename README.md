# DIVCENTRADO

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![TSParticles](https://img.shields.io/badge/TSParticles-000000?style=for-the-badge&logo=particles.js&logoColor=white)

---

## Proyecto desplegado

Se hizo el deploy en Vercel <https://divcentrado3.vercel.app>

---

## Descripción

Se trata de una aplicación web frontend desarrollada en React, creada con el objetivo de darse a conocer profesionalmente y proyectarse hacia una futura inserción laboral en el sector IT.

La web funciona como una presentación personal y grupal, donde se muestra información detallada sobre cada integrante: quiénes son, cuáles son sus intereses, sus habilidades técnicas y personales, y las actividades que realizan en su tiempo libre. A través de una interfaz moderna e interactiva, el proyecto busca reflejar tanto el perfil profesional como el lado humano del equipo.

Este desarrollo no solo sirve como carta de presentación frente a empresas tecnológicas, sino también como una instancia de aprendizaje práctico, aplicando conocimientos de desarrollo frontend con React, diseño de interfaces y trabajo colaborativo.

---

## Tecnologías usadas

* **Framework:** React 18+
* **Lenguaje:** TypeScript
* **Bundler:** Vite
* **Routing:** React Router DOM
* **Estilos:** Bootstrap 5 y CSS3
* **Animaciones:** TSParticles
* **Linting:** ESLint

---

## Instalación y uso

### Prerrequisitos
* Node.js (versión 18 o superior)
* `npm` o `yarn`

### Pasos

1.  **Clonar el repositorio**
    ```bash
    git clone https://github.com/LautaroColella/divcentrado2.git
    ```

2.  **Navegar al directorio del proyecto**
    ```bash
    cd divcentrado2
    ```

3.  **Instalar dependencias**
    ```bash
    npm install
    ```

4.  **Ejecutar en modo de desarrollo**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en la URL `http://localhost:5173`

### Otros scripts

* **Crear build de producción**
    ```bash
    npm run build
    ```
* **Previsualizar el build**
    ```bash
    npm run preview
    ```
* **Ejecutar el linter**
    ```bash
    npm run lint
    ```

---

## Funcionalidades implementadas

* **Carrusel Principal:** Componente `CarouselWrapper` que funciona como contenedor principal para navegar por las secciones.
* **Componentes Interactivos:**
    * **Circle:** Sistema de círculos con animaciones CSS (Flip, Ripple, Shrink) al hacer clic.
    * **Sidebar** Barra de navegación superior para redirigirse a cada perfil.
* **Perfiles Individuales:**
    * **Santiago:** Implementación de `TSParticles` con configuración dinámica para efectos de partículas.
    * **Lautaro** Se muestra un modal al hacer click en los botones de youtube.
    * **Cristian** Animación Flip al hacer click en las tarjetas.
    * **Paola** Cambio del fondo al hacer click en cambiar estilo, artistas o peliculas. Cambio de la foto de perfil al hacer click en cambiar foto.
    * **Silvana** Cambios en toda la página al hoverear sobre la foto.
* **Bitácora:** Sistema de logs y entradas para documentar el progreso.

---

## Estructura del proyecto

```
src/
├── components/               # Componentes reutilizables principales
│   ├── CarouselWrapper.tsx   # Carrusel 
│   ├── logentry.tsx          # Log de cada bitácora
│   ├── Circle.tsx            # Círculos de la segunda slide
│   ├── MovieModal.tsx        # Modal con información de película (API)
│   └── PageTitle.tsx         # Titulo de cada página
│   └── Project.tsx           # Proyecto de cada estudiante (JSON)
│   └── Sidebar.tsx           # Quedaba mal una sidebar, es una navbar
├── pages/               # Páginas principales
│   ├── Bitacora.tsx     # Tercera slide con la bitácora
│   ├── Nombre.tsx       # Primer slide con el nombre del equipo
│   ├── NotFound.tsx     # Error 404 not found
│   ├── Proyectos.tsx    # Proyectos de los estudiantes
│   ├── Trabajo.tsx      # Segunda slide donde se ve la forma de trabajo
│   └── profile/         # Páginas de perfiles individuales
│       ├── Cristian.tsx
│       ├── Lautaro.tsx
│       ├── Paola.tsx
│       ├── Santiago.tsx
│       └── Silvana.tsx
├── styles/              # Hojas de estilo CSS
│   ├── profiles/        # Estilos específicos de perfiles
│   ├── bitacora.css
│   ├── carousel.css
│   ├── nombre.css
│   ├── sidebar.css
│   ├── proyecto.css
│   └── trabajo.css
├── assets/             # Recursos multimedia
│   └── img/            # Imágenes y iconos
├── types/              # Definiciones de tipos TypeScript
├── main.tsx           # Punto de entrada de la aplicación
└── router.tsx         # Configuración de rutas
```

---

## Diagrama de arbol de renderizado 

![Diagrama de arbol](./src/assets/img/ArbolDeRenderizadoyRutas.drawio.png)

## Estructura de Archivos 

![Estructura de archivos](./src/assets/img/estructuraCarpetaArchivos.drawio.png) 

---

## Preview

![Redes](./src/assets/img/RedesDespues.jpeg)
![Sidebar](./src/assets/img/sidebarDespues.png)
![Equipos](./src/assets/img/equiposDespues2.png)
![MediaQuery](./src/assets/img/mediaqueryDespues.png)
