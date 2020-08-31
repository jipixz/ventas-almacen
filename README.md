# Sistema de ventas y almacén

## Descripción

Se espera un sistema para control de ventas generico con las funciones básicas como listado o
busqueda de productos, un carrito de compras y la venta/finalización de la compra.
El sistema debe poder identificar cuando un producto registrado esta agotado en almancen y
ademas debe contar con soporte para almacen en donde se vean reflejados los cambios según
las ventas. De tal forma que las dos partes interactuen entre sí.

### Se plantean las siguientes historias de usuario:


- Como **Cliente** quiero poder ver los productos en venta para agregar a mi carrito de compras.
- Como **Cliente** deseo poder agregar articulos a mi carrito de compra para realizar la compra.
- Como **Cliente** quiero poder comprar los articulos de mi carrito para llevarmelos a casa.
- Como **Almacenista** quiero poder agregar nuevos productor al almacen para incrementar mi
catalogo.
- Como **Almacenista** deseo poder surtir las existencias de un articulo para que puedan continuar
las ventas del producto.
- Como **Almacenista** quiero dar de baja un producto de mi catalogo para dejar de venderselo a
los clientes

### Criterios

- Interfaz gráfica básica para interacción del cliente.
- El sistema no debe permitir la venta de articulos agotados.
- El articulo debe restarse del almacen cuando se realicé la venta del mismo.
