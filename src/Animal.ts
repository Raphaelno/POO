export abstract class Animal{
    nome: string;
    idade: number;
    constructor(
        nome: string,
        idade: number,
    ){
        this.nome = nome
        this.idade = idade
    }
}

// Crie uma hierarquia de classes conforme 
// abaixo com os seguintes atributos e 
// comportamentos (observe a tabela), utilize os seus 
// conhecimentos e distribua as características de 
// forma que tudo o que for comum a todos os animais fique na classe Animal
