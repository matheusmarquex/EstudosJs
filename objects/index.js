// const criaPessoa = (nome, sobrenome, idade) => {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

// const pessoa1 = criaPessoa("Matheus","Marques", 22)
// const pessoa2 = criaPessoa("Samantha", "Firmino", 20)

// console.log(pessoa1, pessoa2)


const pessoa1 = {
    nome: "Matheus",
    sobrenome: "Marques",
    idade: 22,

    falar(){
        console.log(`O ${this.nome} ${this.sobrenome} está dizendo Oi!`)

    }

}

pessoa1.falar()