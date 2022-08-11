
window.addEventListener('load', function() {


/*Lista de Compras
En este proyecto llevaremos al usuario para revisar una lista de compras pre-existente, despúes agregará un nuevo producto y al final va eliminar un producto. 
También podrá buscar por categoría para saber los productos que tiene en la lista */

//*-*-*-*-*-*-*-*-*

//Declaramos un Array de objetos con la lista de compra

const listaDeCompras = [
    { categoria: "Frutas", nombre: "Platanos", cantidad:"2 kg", precio:80 },
    { categoria: "Frutas", nombre: "Manzanas", cantidad:"1 kg", precio:45 },
    { categoria: "Lacteos", nombre: "Queso Manchego", cantidad:"1 paquete", precio:85 },
];

const listaDeComprasAgregar = [
    { categoria: "bebida", nombre: "coca cola", cantidad:"1 botella", precio:45 },
    { categoria: "pasta", nombre: "sopa de letras", cantidad:"1 sobre", precio:30 },
    { categoria: "limpieza", nombre: "Fabuloso", cantidad:"1 botella", precio:80 },
];

function mostrarLista() {
    let consulta1 = "";
    let total = 0 ;
    listaDeCompras.forEach(element => {consulta1 += element.cantidad + " de " + element.nombre + "\n";
    total += element.precio;});
    alert("Tu lista de compras: \n" + consulta1 + "\n por un total de: " + total); 
}

function validar (texto, size){
    while(true){
        let agregar = parseInt(prompt(texto));
        if (agregar >= 1 && agregar <= size){
        return agregar;
        }
    }
}

let estaActivo = true;

//*-*-**-*-*-*

while(estaActivo){
    let bienvenida = parseInt( prompt("Bienvenido a tu Lista de Super Interectiva \n ¿Qué deseas hacer? \n 1) Revisar mi lista del super \n 2) Agregar un nuevo producto en la lista \n 3) Retirar un producto de la lista \n 4) Salir de la app \n \n (Introduce el número de la acción que deaseas realizar)"))
    switch (bienvenida) {
        case 1:
            mostrarLista();
            break;

        case 2:
            let consulta2 = "";
            let indice = 0;
            listaDeComprasAgregar.forEach(element => {
                indice ++
                consulta2 += indice + ") " + element.cantidad + " de " + element.nombre + " por $" + element.precio + "\n";
            });
            let texto = "Cosas que puedes agregar: \n" + consulta2
            let agregar = validar(texto, listaDeComprasAgregar.length);
            listaDeCompras.push(listaDeComprasAgregar[agregar - 1]);
            mostrarLista();
            break;

        case 3:
            let consulta3="";
            let indice2 = 0;
            listaDeCompras.forEach(element => {
                indice2 ++
                consulta3 += indice2 + ") " + element.cantidad + " de " + element.nombre + " por $" + element.precio + "\n";
            })
            let texto2 = "Selecciona el item que quieres eliminar: \n" + consulta3
            let borrar = validar (texto2, listaDeCompras.length);
            listaDeCompras.splice(borrar-1 , 1)
            mostrarLista();
            break;

        case 4:
           estaActivo = false;
           break;

        default:
            alert("Los sentimos, esa opción no existe")
            console.log(bienvenida)
            break;
    }
 }



})
