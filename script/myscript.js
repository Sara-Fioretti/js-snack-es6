/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/
let oggetti = [
    { nome: "bici1", peso: 6 },
    { nome: "bici2", peso: 6.5 },
    { nome: "bici3", peso: 8 },
    { nome: "bici4", peso: 7 },
    { nome: "bici5", peso: 7.5 },
    { nome: "bici6", peso: 8.5 },
    { nome: "bici7", peso: 9 },
    { nome: "bici8", peso: 6.8 },
]

function elementoMinore(array) {
    let pesoMinore = array[0].peso
    for (let i = 0; i < oggetti.length; i++) {
        if (oggetti[i].peso < oggetti[0].peso) {
            pesoMinore = oggetti[i].peso
        }
    }
    return (pesoMinore)
}
console.log(elementoMinore(oggetti))

/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

let squadre = [
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Cremonese", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Cagliari", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
]

for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.floor(Math.random()*70);
    squadre[i].falliSubiti = Math.floor(Math.random()*500);
}
console.log(squadre)

let falliSquadre = [];
for (let i = 0; i < squadre.length; i++) {
    falliSquadre.push(squadre[i].nome)
    falliSquadre.push(squadre[i].falliSubiti)
}
console.log(falliSquadre)