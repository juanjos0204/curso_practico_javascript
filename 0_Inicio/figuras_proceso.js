//Código del cuadrado
console.group("Cuadrados");
// const ladoCuarado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuarado + "cm");

//const perimetroCuadrado = ladoCuarado * 4;
function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}
// console.log("El perimetro del cuadrado es :" + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuarado * ladoCuarado;
// console.log("El perimetro del cuadrado es :" + areaCuadrado + "cm^2");

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Código del triángulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triángulo es: " + areaTriangulo + "cm^2");
function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo
console.group("Circulos");
// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm")

//Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");
function diametroCirculo(radio){
    return radio *2;
}

//Pi
//const pi = 3.1415;
const pi = Math.PI;
console.log("PI es: " + pi);

//Circunferencia
// const perimetroCirculo = diametroCirculo * pi;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

//Área
// const areaCirculo = (radioCirculo * radioCirculo) * pi;
// console.log("El área del ciruclo es: " + areaCirculo + "cm^2");
function areaCirculo(area){
    return (radio * radio) * pi;
}

console.groupEnd();

//Aquí interactuamos con el html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


    function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);   
    }
