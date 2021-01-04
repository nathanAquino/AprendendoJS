import {Colaborador} from "./Colaborador.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Colaborador("Nathan",11111122212);

const contaCorrenteNathan = new Conta(0,cliente1,1001);
contaCorrenteNathan.depositar(500);
contaCorrenteNathan.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteNathan);





 