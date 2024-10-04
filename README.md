# Getting Started with Patient Managment Portal

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the Project

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm start
   ```

3. Build for production:

   ```sh
   npm run build
   ```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.



## Descripción del Proyecto
Este proyecto es una aplicación simple en React diseñada para gestionar datos de pacientes. Consta de dos páginas principales:

Página de Inicio: Sirve como la página de aterrizaje de la aplicación.

Página de Lista de Pacientes: Muestra una lista de todos los pacientes y permite gestionar los datos de los pacientes, incluyendo ver, agregar y actualizar los registros.

### Decisiones de Diseño

Modales para la Gestión de Pacientes:

Decidí utilizar un componente modal para agregar y actualizar los registros de pacientes. Esto proporciona una experiencia de usuario fluida, evitando la navegación completa de la página y permitiendo que los usuarios realicen acciones sin abandonar la vista actual.

Tailwind CSS para Estilos:
Elegí Tailwind CSS para el diseño de la aplicación. Prefiero este framework de CSS basado en utilidades, ya que permite un desarrollo más rápido con estilos reutilizables y limpios, además de ofrecer flexibilidad para personalizaciones de diseño y transiciones.

Axios para la Integración de la API:
Para manejar las solicitudes a la API, utilicé Axios para obtener los datos de los pacientes desde el servidor.



