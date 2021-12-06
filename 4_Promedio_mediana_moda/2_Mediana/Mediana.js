const lista1 = [
    100,
    200,
    500,
    800,
    4000000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(valorNumero) {
    if (valorNumero % 2 == 0) {
        return true;
    }else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length) == true){

}else {
    mediana =  lista1[mitadLista1]
} 