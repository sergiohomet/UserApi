Documentación del Proyecto

Introducción

Este proyecto es una aplicación web desarrollada en React con TypeScript, que permite visualizar una lista de publicaciones obtenidas de una API externa. Los usuarios pueden filtrar las publicaciones por título, paginarlas y ver detalles en un modal.

Tecnologías Utilizadas

React con TypeScript

Tailwind CSS para estilos

JSONPlaceholder API para datos de publicaciones y usuarios

Estructura del Proyecto

El proyecto está organizado en los siguientes archivos y carpetas:

/src
├── components
│ ├── Modal.tsx
│ ├── ModalContent.tsx
│ ├── Pagination.tsx
│ ├── PostDetails.tsx
├── hooks
│ ├── usePostApi.ts
│ ├── useUserIdApi.ts
├── types.ts
├── App.tsx
├── styles.css

Componentes

App.tsx

Componente principal que maneja el estado global de la aplicación, incluyendo:

La lista de publicaciones obtenida desde la API.

La página actual para la paginación.

La búsqueda de publicaciones por título.

La gestión del modal para ver detalles de una publicación.

PostDetails.tsx

Muestra la lista de publicaciones en tarjetas (cards). Cada tarjeta permite abrir un modal con detalles adicionales.

Pagination.tsx

Controla la paginación de publicaciones, permitiendo navegar entre páginas.

Modal.tsx

Componente reutilizable para modales, recibe isOpen, onClose y children como props.

ModalContent.tsx

Contenido del modal, muestra detalles de una publicación incluyendo el nombre del autor.

Hooks Personalizados

usePostApi.ts

Maneja la obtención de publicaciones desde la API.

useUserIdApi.ts

Obtiene la información del usuario a partir de su ID.

Tipos Definidos (types.ts)

UsersPost: Define la estructura de una publicación.

User: Extiende UsersPost agregando la propiedad name.

Estilos (CSS)

Los estilos están definidos en styles.css, incluyendo:

Diseño de tarjetas (.card-container, .card).

Estilos para la paginación (.pagination).

Estilos para el modal (.modal-overlay, .modal-content).

Funcionamiento

Carga de publicaciones: Se obtienen desde usePostApi.ts y se almacenan en el estado.

Búsqueda: Filtra las publicaciones en base al título ingresado.

Paginación: Se navega entre las publicaciones de 10 en 10.

Modal de detalles: Al hacer clic en una publicación, se abre un modal con su información y el nombre del autor.

Visualización del autor: Se obtiene el nombre del autor a través de useUserIdApi.ts, usando el userId de la publicación.
