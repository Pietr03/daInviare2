const cambiaTema = document.getElementById("interruttore-tema");
cambiaTema.addEventListener("click", function () {
  if (document.documentElement.className != "scuro") {
    document.documentElement.className = "scuro";
  } else {
    document.documentElement.className = "chiaro";
  }
});
