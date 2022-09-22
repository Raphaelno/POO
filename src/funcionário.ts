export class funcionario{
    Ncracha: number;
    Nome: string;
    idade: number;
    cpf: string;
    rg: number;
    constructor(
        Ncracha: number,
        Nome: string,
        idade: number,
        cpf: string,
        rg: number
    ){
        this.Ncracha = Ncracha
        this.Nome = Nome
        this.idade = idade
        this.cpf = cpf
        this.rg = rg

    }
    verFuncionario(){
        console.log(`Nome ${this.Nome} \nIdade ${this.idade} \nCPF ${this.cpf} \nRG ${this.rg} \n ${this.Ncracha}`)
    }
}

// Crie uma classe funcionário e apresente os atributos
// e métodos referentes esta classe, em seguida crie um 
// objeto funcionário, defina as instâncias deste objeto e 
// apresente as informações deste objeto no console.