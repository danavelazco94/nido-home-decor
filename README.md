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
- Firebase
- Firebase Authentication
- Cloud Firestore
- React Icons
- React-Bootstrap
- Bootstrap
- React Router DOM

## Componentes desarrollados

Para organizar la interfaz se crearon los siguientes componentes:

- **Navbar:** barra de navegación que contiene el logo de NIDO, las categorías de productos, las opciones de autenticación y el CartWidget.
- **CartWidget:** componente que muestra el ícono del carrito y un contador de productos.
- **ItemListContainer:** contenedor que recibe un mensaje de bienvenida mediante props y gestiona la carga y el filtrado de productos según la categoría seleccionada.
- **ItemList:** recibe los productos mediante props y utiliza `.map()` para recorrerlos y renderizar una tarjeta por cada uno.
- **Item:** componente encargado de mostrar individualmente la información de cada producto mediante una tarjeta de React-Bootstrap. Incluye un enlace para acceder al detalle del producto.
- **ItemDetailContainer:** contenedor que obtiene un producto específico mediante su ID y gestiona los estados de carga y error.
- **ItemDetail:** componente encargado de mostrar el detalle completo de un producto, incluyendo imagen, nombre, precio, categoría, descripción y stock.
- **ItemCount:** contador de unidades que permite aumentar o disminuir la cantidad seleccionada, respetando el stock disponible.
- **MainLayout:** componente que establece una estructura compartida para las distintas páginas, incluyendo Navbar, Footer y Outlet.
- **Footer:** pie de página que contiene la identidad de la marca y los derechos reservados.
- **Cart:** página que muestra los productos agregados al carrito, sus cantidades, subtotales y el total de la compra.
- **EmptyCart:** componente que muestra un mensaje cuando el carrito está vacío y permite regresar a la tienda.
- **Checkout:** componente encargado del proceso de finalización de compra, validación de los datos del comprador y registro de la orden en Firestore.
- **Register:** formulario para crear una cuenta mediante correo electrónico y contraseña.
- **Login:** formulario para iniciar sesión con una cuenta existente.
- **ProtectedRoute:** componente que protege las rutas que requieren autenticación.
- **Error:** componente que muestra una página de error 404 y permite regresar al inicio.

## Firebase y carga de productos

Se integró Firebase como servicio de backend para gestionar los productos y las órdenes de compra.
Se utiliza **Cloud Firestore** como base de datos, donde se almacenan los productos de la tienda en una colección llamada `products`.

La colección contiene los datos de cada producto, como:

- ID.
- Nombre.
- Precio.
- Categoría.
- Imagen.
- Stock.
- Descripción.

Para obtener los productos se utilizan las funciones de Firebase Firestore, como `collection()` y `getDocs()`.
También se implementaron consultas con `query()` y `where()` para filtrar los productos según la categoría seleccionada.
La información se obtiene de forma asíncrona utilizando `async/await`, junto con los Hooks `useState` y `useEffect` para gestionar los datos y los estados de carga.

## Detalle de producto

Se implementó la búsqueda individual de productos mediante su ID en Firestore.
Para obtener un producto específico se utilizan las funciones `doc()` y `getDoc()` de Firebase.
El componente `ItemDetailContainer` utiliza `useEffect` y `useState` para realizar la consulta, almacenar el producto y gestionar los estados de carga y error.
Finalmente, `ItemDetail` recibe la información mediante props y muestra los datos del producto junto con el componente `ItemCount`.

## Carrito de compras

Se implementó un sistema de carrito utilizando Context API para compartir y administrar su estado entre los distintos componentes de la aplicación.

Se crearon dos archivos:

- **CartContext:** crea y exporta el contexto del carrito.
- **CartProvider:** administra el estado y proporciona las funciones necesarias para gestionar los productos.

Las funcionalidades implementadas son:

- `addItem(item, quantity)`: agrega un producto al carrito. Si el producto ya existe, acumula la cantidad seleccionada sin duplicarlo y verifica que no se supere el stock disponible.
- `removeItem(itemId)`: elimina un producto del carrito según su ID.
- `clear()`: vacía completamente el carrito.
- `isInCart(id)`: permite comprobar si un producto ya se encuentra agregado.
- `totalItems`: calcula la cantidad total de unidades agregadas al carrito.

Para actualizar el estado se utilizan actualizaciones inmutables mediante el operador spread y métodos como `.find()`, `.map()`, `.filter()`, `.some()` y `.reduce()`.
`CartProvider` envuelve la aplicación para que los componentes puedan acceder al contexto mediante el Hook `useContext()`.
El carrito permite visualizar los productos agregados, sus cantidades, precios unitarios, subtotales y el total de la compra. Además, se puede eliminar cada producto individualmente o vaciar el carrito por completo.

## Navegación con React Router

Se implementó React Router DOM para gestionar la navegación entre las distintas páginas de la tienda sin necesidad de recargar el sitio.

Las rutas configuradas son:

- `/`: página principal con el catálogo completo.
- `/category/:type`: permite acceder a las distintas categorías de productos.
- `/item/:id`: muestra el detalle individual de un producto según su ID.
- `/cart`: muestra el carrito de compras.
- `/checkout`: permite finalizar la compra. Es una ruta protegida que requiere autenticación.
- `/login`: formulario de inicio de sesión.
- `/register`: formulario de registro de usuarios.
- `/error`: página de error 404.
- `*`: ruta que captura direcciones inexistentes y muestra la página de error.

Se utilizaron los componentes `BrowserRouter`, `Routes` y `Route` para configurar las rutas, junto con `Link` y `NavLink` para realizar la navegación.
Además, se implementó `MainLayout` para mantener el Navbar y el Footer visibles en las distintas páginas de la tienda.

## Autenticación de usuarios

Se implementó Firebase Authentication para gestionar el registro y el inicio de sesión de los usuarios mediante correo electrónico y contraseña.
Se crearon dos archivos:

- **AuthContext:** crea y exporta el contexto de autenticación.
- **AuthProvider:** administra el estado del usuario autenticado y proporciona las funciones necesarias para gestionar la sesión.

Las funcionalidades implementadas son:

- Registro de usuarios mediante `createUserWithEmailAndPassword()`.
- Inicio de sesión mediante `signInWithEmailAndPassword()`.
- Cierre de sesión mediante `signOut()`.
- Persistencia de la sesión mediante `onAuthStateChanged()`.

El Navbar muestra el correo electrónico del usuario cuando está autenticado y ofrece la opción de cerrar sesión. Cuando no hay una sesión activa, muestra las opciones para iniciar sesión o crear una cuenta.
También se implementó `ProtectedRoute` para restringir el acceso al checkout a los usuarios autenticados.

## Checkout y registro de órdenes

Se desarrolló un proceso de finalización de compra que permite ingresar y validar los datos del comprador antes de registrar una orden.
Al confirmar la compra, se genera un documento en la colección `orders` de Firestore.

Cada orden almacena:

- UID y correo electrónico del usuario autenticado.
- Datos del comprador.
- Productos incluidos en la compra y sus cantidades.
- Total de la operación.
- Fecha de creación mediante `serverTimestamp()`.

Para guardar las órdenes se utiliza `addDoc()`.
Una vez registrada correctamente la compra, se muestra el identificador de la orden y se vacía el carrito.

## Reglas de seguridad de Firestore

Se configuraron reglas de seguridad para proteger los datos almacenados en Firestore.

- La colección `products` permite la lectura pública de los productos, pero no su modificación desde el cliente.
- La colección `orders` permite crear órdenes únicamente a usuarios autenticados.
- La creación de una orden verifica que el UID almacenado coincida con el UID del usuario autenticado.
- La lectura, modificación y eliminación de órdenes están restringidas desde el cliente.

## Instalación y ejecución

Para ejecutar el proyecto localmente, seguí estos pasos:

1. Clonar el repositorio:

git clone https://github.com/danavelazco94/nido-home-decor.git

2. Ingresar a la carpeta del proyecto:

cd nido-home-decor

3. Instalar las dependencias:

npm install

4. Configurar las variables de entorno de Firebase en un archivo `.env`, utilizando los nombres de variables requeridos por `src/firebase/config.js`.

5. Iniciar el servidor de desarrollo:

npm run dev

Para verificar el código y generar la compilación de producción se pueden ejecutar los siguientes comandos:

npm run lint
npm run build

**Importante:** el archivo `.env` contiene información de configuración y no debe subirse al repositorio público.

## Estado del proyecto

Proyecto realizado como trabajo final del curso de React.

NIDO cuenta con un catálogo de productos conectado a Firebase, navegación por categorías, detalle individual de productos, carrito de compras funcional, autenticación de usuarios y un proceso de checkout con registro de órdenes en Firestore.