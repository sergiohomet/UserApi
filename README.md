🚀 Cómo Ejecutar el Proyecto en Local

1️⃣ Clonar el Repositorio
Abre una terminal y ejecuta el siguiente comando:

git clone <URL_DEL_REPOSITORIO>
📌 Nota: Reemplaza <URL_DEL_REPOSITORIO> con la URL real de tu repositorio en GitHub.

Luego, entra en la carpeta del proyecto:
cd NOMBRE_DEL_PROYECTO

2️⃣ Instalar Dependencias
Ejecuta el siguiente comando para instalar las dependencias necesarias:
npm install

3️⃣ Iniciar el Servidor
Una vez finalizada la instalación, ejecuta el siguiente comando para correr la aplicación en modo desarrollo:
npm run dev

Esto abrirá la aplicación en tu navegador en la siguiente dirección:
http://localhost:5173

📌 Nota: Si usas React con Vite, la URL suele ser http://localhost:5173. Si usas Create React App, puede ser http://localhost:3000.


📌 Proyecto de Publicaciones con React y TypeScript
  
🚀 Introducción

Este proyecto es una aplicación web desarrollada en React con TypeScript, que permite visualizar una lista de publicaciones obtenidas de una API externa.

📌 Funcionalidades
✔️ Filtrado de publicaciones por título
✔️ Paginación de publicaciones
✔️ Visualización de detalles de cada publicación en un modal

🛠️ Tecnologías Utilizadas
⚛️ React con TypeScript
🌐 JSONPlaceholder API (para obtener publicaciones y usuarios)

📁 Estructura del Proyecto

/src
├── components
│   ├── Modal.tsx
│   ├── ModalContent.tsx
│   ├── Pagination.tsx
│   ├── PostDetails.tsx
├── hooks
│   ├── usePostApi.ts
│   ├── useUserIdApi.ts
├── types.ts
├── App.tsx
├── styles.css

📌 Componentes

🏠 App.tsx
Componente principal que maneja el estado global de la aplicación, incluyendo:

La lista de publicaciones obtenida desde la API
La página actual para la paginación
La búsqueda de publicaciones por título
La gestión del modal para ver detalles de una publicación
📌 PostDetails.tsx
📌 Muestra la lista de publicaciones en tarjetas (cards).
📌 Cada tarjeta permite abrir un modal con detalles adicionales.

🔄 Pagination.tsx
📌 Controla la paginación de publicaciones.
📌 Permite navegar entre páginas de 10 en 10.

🔲 Modal.tsx
📌 Componente reutilizable para modales.
📌 Recibe isOpen, onClose y children como props.

📝 ModalContent.tsx
📌 Contenido del modal que muestra detalles de la publicación, incluyendo el nombre del autor.

⚡ Hooks Personalizados
📌 usePostApi.ts
📌 Maneja la obtención de publicaciones desde la API.

📌 useUserIdApi.ts
📌 Obtiene la información del usuario a partir de su ID.

🗂️ Tipos Definidos (types.ts)
UsersPost: 📌 Define la estructura de una publicación.
User: 📌 Extiende UsersPost agregando la propiedad name.
🎨 Estilos (CSS)
📌 Los estilos están definidos en styles.css, incluyendo:

🎴 Diseño de tarjetas (.card-container, .card).
🔄 Estilos para la paginación (.pagination).
🖼️ Estilos para el modal (.modal-overlay, .modal-content).
⚙️ Funcionamiento
🔹 Carga de publicaciones: Se obtienen desde usePostApi.ts y se almacenan en el estado.
🔹 Búsqueda: Filtra las publicaciones en base al título ingresado.
🔹 Paginación: Se navega entre las publicaciones de 10 en 10.
🔹 Modal de detalles: Al hacer clic en una publicación, se abre un modal con su información y el nombre del autor.
🔹 Visualización del autor: Se obtiene el nombre del autor a través de useUserIdApi.ts, usando el userId de la publicación.
