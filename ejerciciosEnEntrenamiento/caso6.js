const pedidos = [
    { cliente: "Maria", productos: [{ nombre: "Café", precio: 5 }, { nombre: "Pan", precio: 2 }] },
    { cliente: "Juan", productos: [{ nombre: "Café", precio: 5 }, { nombre: "Té", precio: 4 }] },
]
const resumen = {}
pedidos.forEach(pedido => {
    pedido.productos.forEach(producto => {
        const { nombre, precio } = producto;
        if (!resumen[nombre]) {
            resumen[nombre] = { totalPedidos: 0, totalIngresos: 0 };
          }
          resumen[nombre].totalPedidos += 1;
          resumen[nombre].totalIngresos += precio;
        });
      });
      console.log(resumen);