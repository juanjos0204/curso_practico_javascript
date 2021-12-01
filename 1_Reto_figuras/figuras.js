function alturaT(lado1, lado2, base) { //función para calcular, debe ser llamada
    // return (Number (lado1) + Number (lado2) + Number (base));
    return Math.round(Math.sqrt((lado1**2)-((base**2)/4))*100)/100;
    // para elevar a la potencia: 2**3 = 8, los ** indica potecia acompañado del numero o valor
}

function calcularT() {
    const inputA = document.getElementById("inputLadoA");
    const ladoA = inputA.value;
    const inputB = document.getElementById("inputLadoB");
    const ladoB = inputB.value;
    const inputC = document.getElementById("inputBase");
    const ladoC = inputC.value;

    if (ladoA !== ladoB) {
        alert("Recuerda que el triángulo rectángulo isósceles cuenta con un ángulo recto y dos agudos iguales (de 45° cada uno), dos lados son iguales y el otro diferente. Los lados iguales son los catetos y el diferente es la hipotenusa.");
        console.error("¡¡ERROR EN VALORES, RECUERDA!!");
        document.getElementById("inputLadoA").value = "";
        document.getElementById("inputLadoB").value = "";
        // document.getElementById("inputBase").value = "";
    } 
    else {
        const resultado = alturaT (ladoA, ladoB, ladoC);
        alert(`La altura del triángulo isóceles es: ${resultado}`)
        console.log(`La altura del triángulo isóceles es: ${resultado}`);
    }
}