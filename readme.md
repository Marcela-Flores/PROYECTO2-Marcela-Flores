

------------------------------LEER----------------------------------------------------------------------------

Hola Buen día !!!....La idea de este proyecto es poder hacer una página de: ("libros_usados");
 en un primer momento se conectaba con un fech a la Api de Pixabay pero, como posee pocas imagenes sobre libros se cambió a conectar con fech a un ¡JSONlocal! |(el archivo.json se armó con ChatGPT )|;
 la idea es tener en la pagina principal un "buscador": que haga busqueda tomando como  .referencia(titulo, autor y/o categoria) y te direcione (=>) a 
 ||pagina-detalle.muestre `todas_las_coincidencia`;  
 
 En index.html
        Abajo  ↧ de "buscador";
        (categorias_mas_populares)*10 "+" agregadoDeEvento.
         y que se puedan mover de posición dependiendo su puntuacion;
        Que "tarjeta_categoría" tome  la imagen del libro mas popular de su rama;
       

* moverse en un ambiente dinámico.
* Dejar comentarios y valoración de los pruductos.
* Cagar libros para vender.
* Ubicar a compradores cercas de la zona del vendedor.
* Hacer un algoritmo que permita visualizar los mas valorados.
* Hacer un buscador donde se pueda acceder  por categoria, nombre o autor.

















Para cerrar la cursada del lenguaje JavaScript, te proponemos un proyecto final simple, donde aplicarás los conocimientos adquiridos.

El mismo consiste en desarrollar una landing page de productos o servicios. Puedes utilizar HTML + CSS, ó BootStrap, o cualquier otro Framework CSS con el cual te sientas más a gusto, para hacer el trabajo de diseño web.

El proyecto debe listar en la página principal, una serie de productos y/o servicios. A su vez, cada uno de estos debe contar con un botón que permita ver un detalle de la información del producto o del servicio, de acuerdo al interés de quien visita la web.

La visualización de los productos o servicios puede realizarse mediante el nombre y una breve descripción del mismo. Debe contar con un ícono, botón, o cualquier otro elemento gráfico que consideres apropiado, el cual permitirá ver el detalle de éste.

Al pulsar este último elemento, te llevará a visualizar el detalle del producto/servicio en otro documento HTML.

En el detalle del producto/servicio, debes poder visualizar más información del mismo. Una descripción más extensa, una imagen o imágenes que lo ilustren, o un video asociado, un precio de compra o contratación, y cualquier otro punto que consideres de valor agregado para este.

Esta información detallada, se visualiza en un documento HTML diferente al del listado original. Y debe contener un botón de volver, para retornar al listado principal de productos/servicios.

Para realizar este proyecto, debes utilizar JavaScript, y el mismo deberá ser dinámico. Evita generar los productos/servicios de forma estática en HTML.

La consigna es que puedas integrar las siguientes herramientas de JS:

✅fetch + asincronismo
✅un archivo .JSON
✅Uso del DOM + Eventos
✅Almacenamiento web con LocalStorage

                                       Espacio de trabajo

Archivo JSON: en este crearás el contenido de los productos/servicios que serán mostrados en el documento principal de este proyecto. Recuerda que solo debes mostrar un título o código más una breve descripción.

Fetch + asincronismo: utilizarás la API fetch para leer el contenido del archivo JSON, y armar el HTML dinámico, combinando template string + template literals dentro de una función la cual recibe como parámetro cada producto/servicio del array de objetos.

DOM: En la estructura de template string, agrega un botón, icono o cualquier elemento que definas, para poder ver el detalle del producto/servicio. Utiliza alguna función que te permita identificar qué ítem quiere ver en detalle el usuario.

Evento: Ante este evento, deberás identificar el objeto literal correspondiente al producto/servicio seleccionado, y almacenarlo en LocalStorage. Luego redireccionas al usuario a la página detalle.


Al cargar el documento HTML de detalle, recuperas la información de LocalStorage para mostrarla detalladamente.

Respecto a las imágenes y/o videos asociados a cada producto, puedes almacenar este contenido en una subcarpeta local de tu proyecto, y referenciarla luego al mostrarla en pantalla.



Ejemplo de la estructura del archivo JSON.

[
{
codigo: ‘Producto 1’,
descripcion: ‘Descripción del producto 1’,
imagen: ‘images/producto1.webp’,
detalle: ‘Aquí puedes mostrar una descripción más detallada del producto 1. Si son servicios, puedes detallar también qué consideraciones debe tener el usuario al contratar o adquirir el mismo…’,
precio: 1234.00,
puntuacion: ‘*****’
},
...
]

Desarrolla el mejor trabajo posible con este proyecto, para que puedas aprovecharlo a 
pleno en tu portfolio personal.

El día 2/10 es la fecha máxima para su presentación. 

La semana posterior, estaremos realizándote una devolución del trabajo a través del sistema de mensajería del Campus UNTREF.