class Guerrier{
    constructor(attack, precision){
    this.attack = attack
    this.precision = precision
    }
    getAttack() {
    console.log(this.attack)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function Precision(joueur_prec){
    let prec = (getRandomInt(joueur_prec.precision) / joueur_prec.precision)*100
    return prec
}

function Attack(joueur_atck){
    let damage = 0
    if (Precision(joueur_atck) <= 25){
        damage = 0
    }

    else if (Precision(joueur_atck) <= 74){
        damage = joueur_atck.attack
    }

    else{
        damage = joueur_atck.attack * 1.5
    }

    return damage
}

let Samuel = new Guerrier(20, 55)
let Dimitri = new Guerrier(10, 85)

let pv_Samuel = 100
let pv_Dimitri = 200

let atck_Samuel = 0
let atck_Dimitri = 0

let tour = 0


console.log('Samuel : ', pv_Samuel,'PV')
console.log('Dimitri : ', pv_Dimitri,'PV')

while(pv_Samuel > 0  ||  pv_Dimitri > 0){
    atck_Samuel = Attack(Samuel)

    atck_Dimitri = Attack(Dimitri)

    tour = tour + 1

    console.log('Tour ', tour)
    console.log('Samuel a enlevé ', atck_Samuel, 'PV à Dimitri, et Dimitri a enlevé ', atck_Dimitri,'PV à Samuel.')

    pv_Samuel = pv_Samuel - atck_Dimitri
    pv_Dimitri = pv_Dimitri - atck_Samuel
    console.log('Samuel : ', pv_Samuel,'PV')
    console.log('Dimitri : ', pv_Dimitri,'PV')
    
    if(pv_Samuel<0 || pv_Dimitri< 0){
        break
    }
}

if (pv_Dimitri <= 0){
    console.log('Samuel a gagné !')
}

else{
    console.log('Dimitri a gagné !')
}