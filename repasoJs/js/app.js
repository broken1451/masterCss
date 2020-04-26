// let nombre = 'adrian';
// let altura = 111;
// let datos = document.getElementById('datos');

// // document.write(nombre)
// // document.write(altura)
// let concatenacion = `
// <h1>Repaso de js</h1> <h1> mi nombre es: </h1> ${nombre} y tengo la
// <h1> Altura de: </h1> ${altura} cm`;

// console.log(concatenacion)
// datos.innerHTML = concatenacion;

// if (altura >= 190) {
//     datos.innerHTML =  datos.innerHTML +  `Eres una persona alta`
// }else {
//     datos.innerHTML =  datos.innerHTML +  `Eres una persona baja`
// }

// for (let i = 2000; i <= 2020 ; i++) {

//     datos.innerHTML =  datos.innerHTML + `<h1>Estamos en el anio </h1>` +  i;
// }

function muestraNombre(nombre, altura) {
  
    let datos = `
    <h1>Repaso de js</h1> <h1> mi nombre es: </h1> ${nombre} y tengo la
    <h1> Altura de: </h1> ${altura} cm`;
    return datos;
}

function imprimir() {
    let datos = document.getElementById('datos');
    datos.innerHTML = muestraNombre('Adrian', 150)
}

imprimir();


let nombre = ['Adrian',' Antonio', ' Jose']
// alert(nombre[1]);
document.write(`<h1>Listado de nombres</h1>`);
for (let i = 0; i < nombre.length; i++) {
    const element = nombre[i] + `<br>`;
    document.write(element);
}

nombre.forEach((nombre)=>{
    document.write(nombre + `<br>`);
});

for (const name of nombre) {
    document.write(name + `<br>`);
}