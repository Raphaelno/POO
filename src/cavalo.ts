import { Animal } from "./Animal";
export class cavalo extends Animal{
    especie: string;
    som: string;
    fuga: string;
    constructor(
        nome: string,
        idade: number,
        especie: string,
        som: string,
        fuga: string
    ){
        super(nome, idade);
        this.nome = nome
        this.idade = idade
        this.especie = especie
        this.som = som
        this.fuga = fuga
        
    }
    verNome(){
        console.log(`${this.nome}`)
    }
    verIdade(){
        console.log(`${this.idade}`)
    }
    verEspecie(){
        console.log(`${this.especie}`)
    }
    verSom(){
        console.log(`${this.som}`)
    }
    verFuga(){
        console.log(`${this.fuga}`)
    }
}