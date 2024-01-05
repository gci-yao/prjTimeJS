const minute = document.querySelector("#minute");;
const second = document.querySelector("#second");;
// let min = 0;
// let sec = 0;

// function increment() {
//     console.log("toto");
//     sec++;
//     second.innerHTML = `${sec}s`;
//     if (sec == 60) {
//         min++;
//         minute.innerHTML = `${min}min : `;
//         sec = 0;
//         second.style.color = "black";
//     }
// }
// setInterval(() => {
//     increment()
// }, 1000);




// -----------premier---------


// // Fonction pour dessiner un cercle avec des petits traits
// function dessinerCercleAvecTraits() {
//     // Récupérer le contexte graphique 2D du canvas
//     var canvas = document.getElementById("myCanvas");
//     var ctx = canvas.getContext("2d");

//     // Définir les paramètres du cercle
//     var x = canvas.width / 2;
//     var y = canvas.height / 2;
//     var rayon = 130;

//     // Dessiner le cercle
//     ctx.beginPath();
//     ctx.arc(x, y, rayon, 0, 2 * Math.PI);
//     ctx.stroke();

//     // Dessiner les petits traits
//     var nombreTraits = 12;
//     for (var i = 0; i < nombreTraits; i++) {
//         var angle = (i / nombreTraits) * 2 * Math.PI;
//         var x1 = x + rayon * Math.cos(angle);
//         var y1 = y + rayon * Math.sin(angle);
//         var x2 = x + (rayon - 10) * Math.cos(angle);
//         var y2 = y + (rayon - 10) * Math.sin(angle);

//         ctx.beginPath();
//         ctx.moveTo(x1, y1);
//         ctx.lineTo(x2, y2);
//         ctx.stroke();
//     }
// }

// // Appeler la fonction lorsque la page est chargée
// window.onload = dessinerCercleAvecTraits;


// ---------deuxième----------



// // Fonction pour dessiner une montre avec les aiguilles
// function dessinerMontreAvecAiguilles() {
//     // Récupérer le contexte graphique 2D du canvas
//     var canvas = document.getElementById("myCanvas");
//     var ctx = canvas.getContext("2d");

//     // Définir les paramètres du cercle
//     var x = canvas.width / 2;
//     var y = canvas.height / 2;
//     var rayon = 80;

//     // Dessiner le cercle
//     ctx.beginPath();
//     ctx.arc(x, y, rayon, 0, 2 * Math.PI);
//     ctx.stroke();

//     // Obtenir l'heure actuelle
//     var maintenant = new Date();
//     var heures = maintenant.getHours();
//     var minutes = maintenant.getMinutes();
//     var secondes = maintenant.getSeconds();

//     // Dessiner l'aiguille des heures
//     var angleHeures = (heures % 12 + minutes / 60) * (2 * Math.PI / 12);
//     dessinerAiguille(x, y, rayon * 0.5, angleHeures, 8);

//     // Dessiner l'aiguille des minutes
//     var angleMinutes = (minutes + secondes / 60) * (2 * Math.PI / 60);
//     dessinerAiguille(x, y, rayon * 0.7, angleMinutes, 4);

//     // Dessiner l'aiguille des secondes
//     var angleSecondes = (secondes + maintenant.getMilliseconds() / 1000) * (2 * Math.PI / 60);
//     dessinerAiguille(x, y, rayon * 0.9, angleSecondes, 1);
// }

// // Fonction pour dessiner une aiguille à partir d'un point central
// function dessinerAiguille(x, y, longueur, angle, largeur) {
//     var canvas = document.getElementById("myCanvas");
//     var ctx = canvas.getContext("2d");

//     var x2 = x + longueur * Math.cos(angle);
//     var y2 = y + longueur * Math.sin(angle);

//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x2, y2);
//     ctx.lineWidth = largeur;
//     ctx.stroke();
// }



// // Appeler la fonction lorsque la page est chargée
// window.onload = dessinerMontreAvecAiguilles;


// ---------troisième---------


// Récupérer le canvas et le contexte 2D
let canvas = document.getElementById('clockCanvas');
let ctx = canvas.getContext('2d');

// Centre de l'horloge
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

// Rayon de l'horloge
let clockRadius = 140;

// Actualiser l'horloge chaque seconde
setInterval(drawClock, 1000);

function drawClock() {
    // Effacer le contenu précédent
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessiner le cercle de l'horloge
    ctx.beginPath();
    ctx.arc(centerX, centerY, clockRadius, 0, 2 * Math.PI);
    ctx.stroke();

    // Obtenir l'heure actuelle
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Dessiner les traits pour les heures, minutes et secondes
    drawClockLines(12, hours, centerX, centerY, clockRadius * 0.5, 6);
    drawClockLines(60, minutes, centerX, centerY, clockRadius * 0.7, 4);
    drawClockLines(60, seconds, centerX, centerY, clockRadius * 0.9, 2);

    // Dessiner les aiguilles
    drawClockHand(centerX, centerY, hours * (360 / 12) + (minutes / 60) * (360 / 12), clockRadius * 0.4, 6);
    drawClockHand(centerX, centerY, minutes * (360 / 60) + (seconds / 60) * (360 / 60), clockRadius * 0.6, 4);
    drawClockHand(centerX, centerY, seconds * (360 / 60), clockRadius * 0.8, 2);
}

function drawClockLines(totalLines, currentLine, x, y, length, lineWidth) {
    let angleStep = 360 / totalLines;
    ctx.lineWidth = lineWidth;

    for (let i = 0; i < totalLines; i++) {
        let angle = (i * angleStep) * (Math.PI / 180);
        let startX = x + Math.cos(angle) * (length - lineWidth / 2);
        let startY = y + Math.sin(angle) * (length - lineWidth / 2);
        let endX = x + Math.cos(angle) * (length + lineWidth / 2);
        let endY = y + Math.sin(angle) * (length + lineWidth / 2);

        if (i === currentLine) {
            ctx.strokeStyle = "#000"; // Couleur du trait pour l'aiguille actuelle
        } else {
            ctx.strokeStyle = "#666"; // Couleur des autres traits
        }

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
}

function drawClockHand(x, y, angle, length, lineWidth) {
    let endX = x + Math.cos(angle * (Math.PI / 180)) * length;
    let endY = y + Math.sin(angle * (Math.PI / 180)) * length;

    ctx.strokeStyle = "#000"; // Couleur de l'aiguille
    ctx.lineWidth = lineWidth;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}