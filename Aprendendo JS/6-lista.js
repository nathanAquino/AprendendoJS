console.log(`Trabalhando com Listas`);

// ctrl +k +c comenta um bloco// cntrl + k + u retira o comentario
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro` 
);

listaDeDestinos.push(`Curitiba`)
//push adiciona um item na lista
console.log("Destinos possiveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);//remove um item de acordo com a posição selecionada em []