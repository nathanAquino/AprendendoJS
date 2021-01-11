import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Nathan",11111122212);

const contaCorrenteNathan = new ContaCorrente(cliente1,1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);


console.log(contaPoupanca);
console.log(contaCorrenteNathan);





 