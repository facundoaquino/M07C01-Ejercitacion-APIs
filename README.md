 

## Ejercitación - M07C01

 

 

![](https://lh3.googleusercontent.com/2aCDTS_hn66k4OwoiF-yhL1pAnjaQKGmBBNujJy4HfE29e63X83ybnxLg2Gv8tPrbygfOvY368SIekPy67R41Op9wDurgBkWthqxaGGK1LR8IPxuqa56K1ZTihd4_PkusHqqwIgL)

 

 

Desafío 1 --- La puesta en marcha
===============================
 

 
-   Instalar las dependencias de Node
-   Crear la base de datos
-   Configurar el acceso a la base de datos (ojo que este proyecto usa archivos .env).
-   Iniciar el proyecto

Desafío 2 --- Los endpoints de la home
====================================
 

-   Crear el controlador de productos de la api →  /controllers/api/productsController.js
-   Crear las rutas de productos de la api → /routes/api/productsRouter.js
-   Agregar las rutas al archivo app.js
-   Programar el endpoint de últimos productos → /api/products/latest 
-   Programar el endpoint de productos con descuento → /api/products/offers
-   Probar que ambos endpoints funcionen correctamente
- La estructura de cómo deberían entregar los datos de los productos.\
```javascript
{

  "meta": {

        "status": 200,

        "count": 8,

        "url": "/api/myProducts/latest"

  },

  "data": [

        {

          "id": 221,

          "name": "Nike cheta mal",

          "price": "5520",

          "discount": 10,

          "image": "image-1592451529123.jpg",

          "description": "Tan piolas pero se rompen al toque",

          "brandId": 1,

          "categoryId": 10,

          "userId": 101,

          "createdAt": "2020-06-18T03:38:49.000Z",

          "updatedAt": "2020-07-13T23:44:51.000Z",

          "deletedAt": null

        },

        { ... },

         

  ]

}
```

Desafío 3 --- Consumiendo los endpoints en la home
================================================

 

Para esto vamos a tener que hacer un pedido desde la home y en función de los datos que nos lleguen mostrar los productos en los listados.

 

-   Agregar un script a la home → public/js/products.js

-   Cuando termine de cargar la página, hacer el pedido a la API de últimos productos.
-   Cuando nos llegue el resultado, modificar el contenedor de últimos productos para agregar los datos que llegaron → /api/products/latest
-   Hacer lo mismo para el endpoint de productos en oferta →  /api/products/offers

![](https://lh3.googleusercontent.com/3c24-f1RJqgmzZwGm56xZptqpPchPQR6RgvsPF6oS4EDR1VzBOVH8c4X1BsPYcgvsYCuuxwF8BqqE0rGbNMN0T2P933gVrPPWxGskRiPKDFdvIxlLYsu0JwusU9PLAClN_CdvbIu)
===============================================================================================================================================================================

Desafío 4 (opcional) --- Los endpoints de categorías
==================================================

Si hacés click en el link de categorías del header, vas a ver un listado de productos y categorías.

La idea del desafío es crear un endpoint de productos que pueda tomar una categoría como parámetro opcional. Si nos llega una categoría, vamos a traer los productos de esa categoría, si no nos llega, traemos todos los productos.

La segunda parte será implementar este pedido al hacer click en cada uno de los botones de categorías.

 

Creando el endpoint

-   Agregar la nueva ruta en el ruteador → /routes/api/productsRouter.js
-   Agregar la nueva acción en el controlador →  /controllers/api/productsController.js
-   Programar el endpoint de productos por categoría → /api/products/{category}
-   Probar que el endpoint funcione correctamente

Consumiendo el endpoint

-   Agregar un script a la página de categorías → public/js/categories.js

-   Cuando termine de cargar la página, hacer el pedido a la API de todos los productos.
-   Cuando nos llegue el resultado, modificar el contenedor productos para agregar los datos que llegaron → /api/products/latest

-   Agregar un evento a cada uno de los botones de categorías

-   Al hacer click, llamar a la ruta con la categoría correspondiente.
-   Cuando vuelvan los resultados actualizar el listado y el título para que diga en qué categoría estamos.