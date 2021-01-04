import { Colaborador } from "./Colaborador.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    
     
    set cliente(novoValor){
        if(novoValor instanceof Colaborador){
            this._cliente = novoValor;
        }
        
    }

    get client(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia,cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        taxa = 1.1 * valor;
        if(this._saldo>= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
