export class avião{
    empresa: string;
    tipo: string;
    nome: string;
    assentos: number;
    porte: string;

    constructor(
        empresa: string,
        tipo: string,
        nome: string,
        assentos: number,
        porte: string
    ){
        this.empresa = empresa
        this.tipo = tipo
        this.nome = nome
        this.assentos = assentos
        this.porte = porte

    }
    verAviao(){
        console.log(`Empresa ${this.empresa} \nTipo ${this.tipo} \nNome ${this.nome} \nNúmero de assentos ${this.assentos} \nPorte ${this.porte}`)
    }
}

// Crie uma classe avião e apresente os atributos 
// e métodos referentes a esta classe, em seguida 
// crie um objeto avião, defina as instâncias deste 
// objeto e apresente as informações deste objeto no console.
