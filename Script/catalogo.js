class Prodotto {
  constructor(titoloInput, prezzoInput) {
    this.titolo = titoloInput;
    this.prezzo = `<p id="prezzo">${prezzoInput}</p>`;
    this.quantita = `<input value="0" min="0" max="4" type="number" name="" id="quantita" />`;
  }
}
//const oggetto = new Prodotto();

// tipi: number, string, object, arr, bool, null, undefined

const listaMaterie = [
  "Italiano",
  "Storia",
  "Inglese",
  "Matematica",
  "Scienze",
  "Fisica",
];
const catalogo = [];
let prezzoMateria = 10; // prezzo default

function updatePrezzoMateria() {
  const tipoClasseStudente = document.getElementById("tipo-classe").value;
  if (tipoClasseStudente == "elementare") {
    prezzoMateria = 10;
  } else if (tipoClasseStudente == "media") {
    prezzoMateria = 12;
  } else {
    prezzoMateria = 15;
  }
}
updatePrezzoMateria();
listaMaterie.forEach((materia) => {
  catalogo.push(new Prodotto(materia, prezzoMateria));
});

function aggiornaPrezziMaterie() {
  updatePrezzoMateria();

  const elementiTabella = document.querySelectorAll(
    "#tabella-prodotti tbody #prezzo"
  );
  elementiTabella.forEach((prezzo) => {
    prezzo.innerText = prezzoMateria;
  });
}

const tabella = document.querySelector("table#tabella-prodotti tbody");
tabella.innerHTML = catalogo
  .map((prodotto, index) => {
    return `
      <tr id="prodotto-${index}">
        <td>${prodotto.titolo}</td>
        <td>${prodotto.prezzo}</td>
        <td id="quantita-${index}">${prodotto.quantita}</td>
      </tr>
    `;
  })
  .join("");

function aggiornaTotaleCarrello() {
  aggiornaPrezziMaterie();
  let somma = 0;
  const totale = document.getElementById("totale-carrello");

  catalogo.forEach((prodotto, index) => {
    // Utilizzo del selettore corretto per l'elemento specifico
    const quantita = document.querySelector(`#quantita-${index} input`);
    const prezzo = document.querySelector(`#prodotto-${index} #prezzo`);
    // Verifica se l'elemento è stato trovato
    if (quantita) {
      const costo = parseInt(prezzo.innerText) * parseInt(quantita.value);
      // prima ho somma = 10 e costo = 5
      somma += costo;
      // dopo, somma = 15
    } else {
      console.error(`Elemento quantita-${index} non trovato.`);
    }
  });

  totale.innerText = somma;
}

function checkCarrello() {
  const totale = document.getElementById("totale-carrello");
  if (parseFloat(totale.innerText) == 0) {
    alert("Carrello vuoto");
  } else {
    alert("Grazie per l'acquisto");
  }
}
