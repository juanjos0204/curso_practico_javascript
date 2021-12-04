function disable() { //Valida si debe o no deshabilitar el listado desplegable
    const manualValue = document.getElementById("tokenManual").value;
    const autoValue = document.getElementById("tokenAutomatico");

    if (manualValue != null) {//Si Input tiene data, agrega atributo disabled a listado desplegable 
        autoValue.setAttribute("disabled", "true");
    }

    if (manualValue == null || manualValue == "") {//Si Input no tiene data remueve el atributo disabled del listado desplegable
        autoValue.removeAttribute("disabled");
    }
}

function enviar() {
    const productValue = document.getElementById("valorProducto").value;
    const discountText = tokenAutomatico.options[tokenAutomatico.selectedIndex].text;

    function token() {//Valida el estado del atributo para obtener el valor de discountProduct
        const tokenAutomatico = document.getElementById("tokenAutomatico");
        const productStateAtribute = tokenAutomatico.getAttribute("disabled");

        if (productStateAtribute == null) {//Si disabled no existe toma el valor del indice del listado desplegable
            const discountProduct = Number(document.getElementById("tokenAutomatico").value);
            return discountProduct
        } else {//Si disabled existe toma el valor del Input excluyedo todo menos los numeros para conocer el % de descuento
            const discountString = document.getElementById("tokenManual").value;
            const discountProduct = Number(discountString.replace(/[^0-9]/ig, ""));
            if (discountProduct <= 0 || discountProduct > 100) {//si descuento extraido es menor 1 o mayor a 100 termina la ejecución
                alert("El cupón no es valido. Debe tener un valor numerico entre 1 y 100.");
                throw new Error("Stop script");
            }
            return discountProduct;
        }
    }
    function descuento(producto, descuento) {
        producto = productValue;
        descuento = token();
        const porcentaje = (producto * descuento) / 100;
        return porcentaje;
    }

    function calcular(producto, descuento) {
        producto = productValue;
        descuento = token();
        const finalValue = (producto * (100 - descuento) / 100);
        return finalValue;
    }

    const texto = "El valor del producto es de $" + productValue + ", el descuento es de " + token() + "% ($" + descuento() + "). Valor a pagar $" + calcular();
    document.getElementById("salida").innerHTML = '<p>' + texto + '</p>';
    console.log(texto)
}