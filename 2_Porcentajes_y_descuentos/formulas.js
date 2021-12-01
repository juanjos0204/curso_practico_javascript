function seleccionarProducto() {
    /* Para obtener el valor */
    const listaProducto = document.getElementById("listaProducto").value;
    const descuentoProducto = document.getElementById("descuentoProducto").value;

    /* Para obtener el texto */
    const optionSelected = document.getElementById("listaProducto");
    if (optionSelected.selectedIndex != 0) {
        const selectedProducto = optionSelected.options[optionSelected.selectedIndex].text;
        const optionDescuento = document.getElementById("descuentoProducto");
        const selectedDescuento = optionDescuento.options[optionDescuento.selectedIndex].text;
        const calculado = (listaProducto * (100 - descuentoProducto) / 100);
        console.log(selectedProducto + ": Valor a pagar con " + selectedDescuento + " es de " + "$" + calculado)
        document.getElementById("ResultP").innerHTML = selectedProducto + ": Valor a pagar con " + selectedDescuento + " es de " + "$" + calculado;
        // const imprimir = selectedProducto+ ": Valor a pagar con " + selectedDescuento + " es de " + "$" +calculado;
        // resultP.textContent +=imprimir ;
        // $('#ResultP').val(''); funciones de JQuery

    }
    else {
        alert("Por favor despliegue y seleccione una opción de la lista");
    }
}