import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Nathan",11111122212);

const cliente2 = new Cliente("Aquino", 11112288229);

const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);
 
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.agencia = 220;
conta2.cliente = cliente1;

let valor = 200;
contaCorrenteRicardo.transferir(valor,conta2);


console.log(conta2);




 