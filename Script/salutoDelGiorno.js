function numeroCasuale() {
  return Math.random();
}

function numeroCasualeDecimaliTra(min, max) {
  return Math.random() * (max - min) + min;
  //y = mx + q
  //0 < x < 1
}

function salutoDelGiorno() {
  const oraCorrente = new Date().getHours();
  if (oraCorrente < 12) {
    return "Buongiorno";
  } else if (oraCorrente < 16) {
    return "Buon pomeriggio";
  } else {
    return "Buonasera";
  }
}

const citazioni = [
  {
    citazione:
      "Fatti non foste a viver come bruti ma per seguir virtute e canoscenza",
    fonte: "Dante Alighieri, La Divina Commedia",
  },

  {
    citazione:
      "La lotta di classe c'è stata e l'hanno vinta i ricchi... e non hanno preso prigionieri.",
    fonte: "Alessandro Barbero",
  },

  {
    citazione:
      "No one is useless in this world who lightens the burdens of another",
    fonte: "Charles Dickens, Doctor Marigold ",
  },

  {
    citazione: "Il dubbio è l'inizio della conoscenza",
    fonte: "Cartesio",
  },

  {
    citazione:
      "Non si può insegnare niente; si può solo far sì che uno le cose le trovi in se stesso",
    fonte: "Gallileo Galilei",
  },

  {
    citazione: "Nella vita non c’è nulla da temere, solo da capire.",
    fonte: "Marie Curie",
  },
];

function benvenuto() {
  const titolo = document.getElementById("titolo");
  titolo.innerText = salutoDelGiorno();

  let indice = Math.floor(numeroCasualeDecimaliTra(0, citazioni.length));

  const citazione = document.getElementById("citazione");
  citazione.innerText = citazioni[indice].citazione;

  const fonteCitazione = document.getElementById("fonte-citazione");
  fonteCitazione.innerText = citazioni[indice].fonte;
}

benvenuto();
