export class patinete{
    rodas: number;
    cor: string;
    tamanho: number;
    marca: string;
    constructor(
        rodas: number,
        cor: string,
        tamanho: number,
        marca: string
    ){
        this.rodas = rodas
        this.cor = cor
        this.tamanho = tamanho
        this.rodas = rodas
    }
    verPatinete(){
        console.log(`rodas ${this.rodas} \n cor ${this.cor} \ntamanho ${this.tamanho} \nrodas ${this.rodas}`)
    }
}

// Crie uma classe patinete e apresente os atributos 
// e métodos referentes a esta classe, em seguida crie 
// um objeto patinete, defina as instâncias deste objeto 
// e apresente as informações deste objeto no console.