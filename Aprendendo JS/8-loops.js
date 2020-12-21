console.log(`\n Trabalhando com Loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 19;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Sao Paulo";

console.log("\n Destinos possiveis");
console.log(listaDeDestinos);



const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador ++
}

console.log("Destino existe:", destinoExiste);


if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!!");
}

for( let i = 0 ;i < 3 ; i ++){
    
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
    
}
