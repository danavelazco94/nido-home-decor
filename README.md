# NIDO - Home y Decor

**Objetos que hacen hogar.**

NIDO es un proyecto de e-commerce de decoración para el hogar. La tienda ofrece una variedad de productos que combinan diseño, funcionalidad y calidez, con una estética minimalista y natural.

## Identidad de marca

La propuesta visual de NIDO está inspirada en el minimalismo cálido, el estilo nórdico y el boho chic.

Su objetivo es transmitir tranquilidad, armonía y comodidad a través de objetos decorativos que transforman los espacios en hogares.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- CSS
- React Icons
- React-Bootstrap
- Bootstrap

## Componentes desarrollados

Para organizar la interfaz se crearon los siguientes componentes:

- **Navbar:** Barra de navegación que contiene el logo de NIDO y las categorías de productos.
- **CartWidget:** Componente que muestra el ícono del carrito y un contador de productos.
- **ItemListContainer:** Contenedor que recibe un mensaje de bienvenida mediante props y gestiona la carga de productos.
- **ItemList:** Recibe los productos mediante props y utiliza `.map()` para recorrerlos y renderizar una tarjeta por cada uno.
- **Item:** Componente encargado de mostrar individualmente la información de cada producto mediante una tarjeta de React-Bootstrap.

## Carga de productos

Los productos se encuentran definidos en un archivo local llamado `asyncMock.js`, dentro de la carpeta `src/mock`.

La carga de datos se simula mediante una función llamada `getProducts()`, que devuelve una Promise y utiliza `setTimeout` para establecer un retraso de 2 segundos antes de entregar el listado de productos.

En `ItemListContainer` se utilizan los Hooks `useState` y `useEffect`, junto con `async/await`, para obtener los productos al montar el componente y almacenarlos en el estado `items`.

Posteriormente, `ItemList` recibe el listado y utiliza `.map()` para generar dinámicamente las tarjetas de cada producto.

## Instalación y ejecución

Para ejecutar el proyecto localmente, seguí estos pasos:

1. Clonar el repositorio:

   git clone https://github.com/danavelazco94/nido-home-decor.git

2. Ingresar a la carpeta del proyecto:

   cd nido-home-decor

3. Instalar las dependencias:

   npm install

4. Iniciar el servidor de desarrollo:

   npm run dev

## Estado del proyecto

En desarrollo. Proyecto realizado como trabajo final del curso de React.