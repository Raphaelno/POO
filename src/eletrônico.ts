export class produto{
    polegadas: number;
    tela: string;
    lançamento: number;
    geração: number;

    constructor(
        polegadas: number,
        tela: string,
        lançamento: number,
        geração: number
    ){
        this.polegadas = polegadas
        this.tela = tela
        this.lançamento = lançamento
        this.geração = geração
    }
    verProduto(){
        console.log(`Polegadas ${this.polegadas} \nTela ${this.tela} \nLançamento ${this.lançamento} \nGeração ${this.geração}`)
    }
}

// Crie uma classe produto eletrônico e apresente 
// os atributos e métodos referentes a esta 
// classe, em seguida crie um objeto produto 
// eletrônico, defina as instâncias deste objeto e 
// apresente as informações deste objeto no console.