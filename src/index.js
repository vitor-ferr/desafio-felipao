let nome = "Vitor"
let xp = 6005

if (xp < 1000) {
    console.log ("Ferro");
} else if (xp>=1001 && xp<=2000) {
    console.log ("Bronze");
} else if (xp>=2001 && xp<=5000) {
    console.log ("Prata");
} else if (xp>=6001 && xp<=7000) {
    console.log ("Ouro");
} else if (xp>=7001 && xp<=8000) {
    console.log ("Platina")
} else if (xp>=8001 && xp <=9000) {
    console.log ("Ascendente")
} else if (xp>=9001 && xp <= 10000) {
    console.log ("Imortal")
} else if (xp>=10001) {
    console.log ("Radiante")
}

console.log ('O Herói de nome' + nome + 'está no nivel' + xp)