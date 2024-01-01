class heroi{
    constructor(nomeDoHeroi, idade, tipo, poder){
        this.nomeDoHeroi = nomeDoHeroi
        this.idade = idade
        this.tipo = tipo
        this.poder = poder

   } //tipo (guerreiro, mago, monge, ninja)

   mensagem(){
    console.log(`O personagem ${this.nomeDoHeroi} da classe ${this.tipo} atacou usando ${this.poder}`)
   }
}

let hero = new heroi ("Sapildo", 32 , "Mago", "Magia")
hero.mensagem()