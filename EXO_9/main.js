class pokemon{ 
    constructor(name, attack, defense, hp, luck){
        this.name=name;
        this.attack=attack;
        this.defense=defense;
        this.hp=hp;
        this.luck=luck;
    }

    isLucky() {
        return Math.floor(Math.random() * 100) <= this.luck
    }

    attackPokemon(pokemon) {
        if (this.isLucky()) {
            let dmg = this.attack - pokemon.defense
            pokemon.hp -= dmg
            console.log(this.name + ' inflige ' + dmg + ' points de dégats à ' + pokemon.name);
            console.log('Il reste à ' + pokemon.name + ' ' + pokemon.hp + ' points de vie.');
        } else {
            console.log(`${this.name} a raté son attaque`)
        }
    }
}

let pokemon1 = new pokemon('Zekrom', 150, 120, 100, 90); // Créations de pokémons
let pokemon2 = new pokemon('Reshiram', 120, 100, 100, 90); // Créations de pokémons

console.log(pokemon1, pokemon2)

while (pokemon1.hp>0 && pokemon2.hp>0) { // Combat

    if (pokemon1.isLucky()) { // Tour d'attaque du premier pokémon
        
        pokemon1.attackPokemon(pokemon2);

        if (pokemon2.hp<=0) { // si pokémon2 K.O. fin de combat
            console.log(pokemon2.name + ' lost the fight');
            break;
        }
    }

    if (pokemon2.isLucky()) { // Tour d'attaque du deuxième pokémon
        
        pokemon2.attackPokemon(pokemon1);
        
        if (pokemon1.hp<=0) { // si pokémon1 K.O. fin de combat
            console.log(pokemon1.name + ' lost the fight');
            break;
        }
    }
}