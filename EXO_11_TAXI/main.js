class personnage { // La Classe dans laquelle on définit la personne étant dans le taxi.
    constructor(prenom, sante_mentale) {
        this.prenom = prenom
        this.sante_mentale = sante_mentale
    }
     take_dmg(sante_mentale) {
         this.sante_mentale -= 1
         return sante_mentale
     }
 }
 personnage = new personnage("John", 10)// Création du personnage.
 let musiques = ['Anissa - Wejdene', 'DArkSide - Bring Me The Horizon', 'Another Life - Motionless in white', 'neon blood - revengeinkyoto', 'Mama - NF']// Liste des musiques
 
 function select_music(){// Fonction qui choist aléatoirement une musique
     let music = musiques[Math.floor(Math.random() * musiques.length)]
     return music
 }
 
 function trajet(personnage) {
     let chgmts_taxi = 0
     for (i = 0; i < 30; i++) {
         let music = select_music()
         feux_left = 30-i

         console.log(personnage.prenom + ' écoute ' + music + ' et il reste ' + feux_left + " feux avant d'arriver à destination")
         
         if (music == 'Anissa - Wejdene'){ // S'éxecute si la musique choisie est Anissa de Wejdene
             personnage.take_dmg(personnage.sante_mentale)
             chgmts_taxi += 1
             taxi = chgmts_taxi+1
             console.log(personnage.prenom + ' a encore ' + personnage.sante_mentale + ' points de santé mentale.')
             console.log(personnage.prenom + ' est dans son ' + taxi + 'ème taxi.')
         }
         if (personnage.sante_mentale == 0) { // S'éxecute si le personnage n'a plus de points de santé mentale
            console.log(personnage.prenom + " à explosé. Il est mort. Je crois... Il n'a pas été très bon.")
            break
        }
     }
     if (personnage.sante_mentale > 0) { // Fin du Programme en cas de réussite du personnage
         console.log(personnage.prenom + ' a été arrivé à destination. Il a été bon.')
         console.log(personnage.prenom + ' a encore ' + personnage.sante_mentale + ' points de santé mentale.')
         console.log(personnage.prenom + ' a utilisé  ' + taxi + ' taxis')
     }
 }
 
 trajet(personnage)