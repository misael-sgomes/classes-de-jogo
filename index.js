class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === "Guerreiro") {
            console.log(`${this.tipo} atacou usando Espada`);
        } else if (this.tipo === "Mago") {
            console.log(`${this.tipo} atacou usando Magia`);
        }
    }
}

let heroOne = new Hero("Stark", "50", "Guerreiro");
let heroTwo = new Hero("Thor", "300", "Mago");

heroOne.atacar();
heroTwo.atacar();
