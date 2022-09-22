export class cliente {
    nome: string;
    cpf: string;
    id: number;

    constructor(
        nome: string,
        cpf: string,
        id: number) {
            this.nome = nome
            this.cpf = cpf
            this.id = id

    }

    verCliente(){
        console.log(`Cliente ${this.nome} \nid ${this.id} \ncpf ${this.cpf}`)
    }
    

}

// Atributos normalmente ficam dentro do método
// constructor


// Crie uma classe cliente e apresente os atributos 
// e métodos referentes a esta classe, em seguida 
// crie um objeto cliente, defina as instâncias 
// deste objeto e apresente as informações deste objeto no console.
