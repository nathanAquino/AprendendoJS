import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Nathan",11111122212);
const cliente2 = new Cliente("Aquino", 11112288229);



const contaCorrenteNathan = new ContaCorrente(1001,cliente1);

 
contaCorrenteNathan.depositar(500);
const conta2 = new ContaCorrente(220,cliente2);


let valor = 200;
contaCorrenteNathan.transferir(valor,conta2);

console.log(ContaCorrente.numeroDeContas)





 