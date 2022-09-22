export class banco{
    titular: string;
    agencia: string;
    conta: string;
    saldo: number;
    constructor(
        titular: string,
        agencia: string,
        conta: string,
        saldo: number
    ){
        this.titular = titular
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo

    }
    verConta(){
        console.log(`titular ${this.titular} \nagencia ${this.agencia} \nconta ${this.conta} \nsaldo ${this.saldo}`)
    }
}
// Crie uma classe conta bancária e apresente 
// os atributos e métodos referentes a esta 
// classe, em seguida crie um objeto conta 
// bancária, defina as instâncias deste objeto 
// e apresente as informações deste objeto no console.