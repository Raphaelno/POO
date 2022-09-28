// formas de criar array:
//let identificador = new Array<string>
// let identificador: string[] = []
// let identificador = ["Nome"]
// console.log(identificador)

// let alunos = new Array<string>
// // alunos.push('David', 'Romulo', 'Raphael', 'Ricardo');
// // alunos.push()

// for(let i of alunos){
//     console.log(i)
// }

// //como remover conteudo da array:

// console.log(alunos);

// alunos.pop() //tirar o ultimo elemento da array: .pop()

// console.log(alunos)

// alunos.shift()//tirar o primeiro elemento da array: .shift()

// console.log(alunos)

// alunos.splice(1, 1)// tirar elemento especifico: .splice(n1, n2)
// n1 = primeiro elemento a ser apagado   n2 = ultimo elemento a ser apagado 
// obs: tudo entre n1 e n2 será apagado também


//arrow function:

let soma = (x: number, y: number) => x + y 

console.log(soma(4, 4))