class Tueur {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
}
jason = new Tueur("Jason", 100)

class player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}
liste_types = ['Nerd', 'Sportif', 'Blonde', 'Roux de secours', 'Chaise']
survivors = [new player('Eugène', 'Nerd'), 
             new player('Michel', 'Sportif'), 
             new player('Paul', 'Blonde'), 
             new player('Pierre', 'Roux de secours'), 
             new player('Marie', 'Chaise')]
deads=[]

while (survivors.length>0 && jason.hp>0){
    
    attack = Math.random()
    random = Math.floor(Math.random()*survivors.length)
    cible = survivors[random]

    if (attack<=0.33){ // attaque simple
        console.log(jason.name + ' a tué ' + cible.name)
        deads.push(cible.name)
        survivors.splice(random, 1)
    } else if (attack>=0.67){ // esquive du survivant + 10 dmg
        console.log(jason.name + ' a manqué ' + cible.name + ' de peu et perd 10 points de vie')
        jason.hp -= 10
    } else { // attaque et mort du survivant
        console.log(jason.name + ' a tué ' + cible.name + ' mais a subi 15 points de dégâts.')
        deads.push(cible.name)
        survivors.splice(random, 1)
        jason.hp -= 15
    }
}
if (survivors.length == 0){
    console.log('Le combat est terminé, ' + jason.name + ' a tué ' + deads.join(" "))
    console.log('Il reste à ' + jason.name + ' ' + jason.hp + ' points de vie'    )
} else if (jason.hp <= 0) {
    let live = []
    survivors.forEach((element) => {
        live.push(element.name)
    })
    console.log('Le combat est terminé, ' + live.join(', ') + ' ont survécu. Cependant, ' + deads.join(", ") + ' ont été tués.')
}