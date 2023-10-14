class Tueur {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
}
jason = new Tueur("Jason", 100) // Création personnage + stats Jason

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
             new player('Marie', 'Chaise')] // Création des survivants

deads=[]

while (survivors.length>0 && jason.hp>0){ // Tant qu'au moins un survivant est en vie et jason est en vie, 
    
    attack = Math.random() // Sert pour choisir l'action de jason
    random = Math.floor(Math.random()*survivors.length)
    cible = survivors[random] // Choix aléatoire de la cible parmi les survivants

    if (attack<=0.33){ // attaque simple
        console.log(jason.name + ' a tué ' + cible.name)
        deads.push(cible.name) // On met la cible dans la liste des décès
        survivors.splice(random, 1) // On retire la cible de la liste des survivants
    } else if (attack>=0.67){ // esquive du survivant + 10 dmg
        console.log(jason.name + ' a manqué ' + cible.name + ' de peu et perd 10 points de vie')
        jason.hp -= 10
    } else { // attaque et mort du survivant
        console.log(jason.name + ' a tué ' + cible.name + ' mais a subi 15 points de dégâts.')
        deads.push(cible.name) // On met la cible dans la liste des décès
        survivors.splice(random, 1) // On retire la cible de la liste des survivants
        jason.hp -= 15
    }
}
if (survivors.length == 0){ // s'il n'y a plus de survivants, 
    console.log('Le combat est terminé, ' + jason.name + ' a tué ' + deads.join(" "))
    console.log('Il reste à ' + jason.name + ' ' + jason.hp + ' points de vie'    )
} else if (jason.hp <= 0) { // s'il reste un survivant minimum et que jason est mort, 
    let live = []
    survivors.forEach((element) => { // on met dans une liste les noms de tous les survivants restants
        live.push(element.name)
    })
    console.log('Le combat est terminé, ' + live.join(', ') + ' ont survécu. Cependant, ' + deads.join(", ") + ' ont été tués.')
}