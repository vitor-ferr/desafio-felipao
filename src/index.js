let nome = "Vitor"
let xp = 99050
let elo = ""


if (xp < 1000) {
    elo = "Ferro"
    console.log ("Ferro");
} else if (xp>=1001 && xp<=2000) {
    elo = "Bronze"
    console.log ("Bronze");
} else if (xp>=2001 && xp<=5000) {
    elo = "Prata"
    console.log ("Prata");
} else if (xp>=6001 && xp<=7000) {
    elo = "Ouro"
    console.log ("Ouro");
} else if (xp>=7001 && xp<=8000) {
    elo = "Platina"
    console.log ("Platina")
} else if (xp>=8001 && xp <=9000) {
    elo = "Ascedente"
    console.log ("Ascendente")
} else if (xp>=9001 && xp <= 10000) {
    elo = "Imortal"
    console.log ("Imortal")  
} else if (xp>=10001) {
    console.log ("Radiante")
    elo = "Radiante"
}

console.log ('O Herói de nome ' + nome + ' está no nivel ' + elo)