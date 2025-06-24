const empleados = [
    { id: 1, nombre: "Laura", ventas: [300, 500, 100] },
    { id: 2, nombre: "Carlos", ventas: [400, 200] },
    { id: 3, nombre: "Ana", ventas: [100, 200, 300, 100] },
];
function calcularTotalVentasPorEmpleado(ventas) {
    const totales = {};

    for (const empleadoData of ventas) {
        const nombreEmpleado = empleadoData.nombre;
        const ventasEmpleado = empleadoData.ventas;
        let totalVentasEmpleado = 0;

        for (const venta of ventasEmpleado) {
            totalVentasEmpleado += venta;
        }

        totales[nombreEmpleado] = totalVentasEmpleado;
    }

    return totales;


}

const totalesVentas = calcularTotalVentasPorEmpleado(empleados);
console.log(totalesVentas);