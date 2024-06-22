
// notiziario.js

const articoli = [
  {
    title: "Flessibilità",
    summary: "Puoi decidere se fare lezione in presenza o a distanza",
    date: "05-06-2024",
    imgurl: "./Immagini/notiziario1.png"
  },
  {
    title: "Professionalità",
    summary: "Un team qualificato saprà ascoltare le tue esigenze e ti aiuterà a raggiungere i tuoi obiettivi",
    date: "12-03-2024",
    imgurl: "./Immagini/notiziario2.png"
  },
  {
    title: "Supporto",
    summary: "Puoi contattarci in qualunque momento, saremo sempre pronti ad aiutarti",
    date: "23-02-2024",
    imgurl: "./Immagini/notiziario3.png"
  },
];

/*
let variabile = 5 // questa è una variabile
const oggetto = { valore: 5 } // questo si chiama attributo

function funzione()
{
  return "funzione"
}

const oggetto2 = {funzione : function(){ return "funzione"}}

function nomeFunzione () {} // come dichiarare una funzione
nomeFuzione : function() {} // come dichiarare una funzione dentro un oggetto
*/

let i = 0; // indice iniziale per l'articolo visualizzato
const maxIndice = articoli.length - 1;

// Funzioni per gestire il cambio di articolo
function mostraArticolo(indice) {
  document.getElementById("immagine-notiziario").src = articoli[indice].imgurl;
  document.getElementById("titoloNotizia").innerText = articoli[indice].title;
  document.getElementById("testoNotizia").innerHTML = articoli[indice].summary;
  document.getElementById("segnaNotizie").value = indice + 1;
}

mostraArticolo(i); // Mostra il primo articolo all'avvio della pagina

document.getElementById("indietro").addEventListener("click", function () {
  if (i > 0) {
    i--;
    mostraArticolo(i);
  }
});

document.getElementById("avanti").addEventListener("click", function () {
  if (i < maxIndice) {
    i++;
    mostraArticolo(i);
  }
});
