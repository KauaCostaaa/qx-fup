

class Bandas {
    banda: string = ""; //atributos
    genero: string = "";
    rank: number = 0;
    constructor(nome: string, especie: string, idade: number) { // parâmetros
        this.banda = nome;
        this.genero = especie;
        this.rank = idade;
    }
}

let spotify: Bandas[] = [
    new Bandas("acdc", "rock", 1), 
    new Bandas("") 
]

for (let i = 0; i < spotify.length; i++) {
    console.log(spotify[i].banda + ":" + spotify[i].genero + ":" + spotify[i].rank)
}
