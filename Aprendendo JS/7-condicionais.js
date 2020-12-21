console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 19;
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log("Destinos possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {

//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);//removendo um item

// } else if (estaAcompanhada) {

//     console.log("Comprador está acompanhado e pode comprar")
//     listaDeDestinos.splice(1, 1);//removendo um item
// } else {

//     console.log("nao e maior de idade e nao posso vender");

// }

if (idadeComprador >= 18 || estaAcompanhada == true ) {

    console.log("Comprador maior de idade e esta acompanhado");
    listaDeDestinos.splice(1, 1);//removendo um item

} else {

    console.log("nao e maior de idade e nao esta acompanhado");

}

console.log("Embarque: \n\n")
if(idadeComprador >=18 && temPassagemComprada){

    console.log("Boa viagem");
}else{
    console.log("Voce não pode viajar");
}


console.log(listaDeDestinos);