function mostrarPista() {
  document.getElementById("pista").innerText =
    "Pista: recorda que cada subinterfície necessita la comanda 'encapsulation dot1Q [num_vlan]' abans d'assignar-li una IP.";
}

function respondre(boto, esCorrecta, missatge) {
  alert(missatge);
  if (esCorrecta) {
    boto.style.backgroundColor = "#2e8b57";
  } else {
    boto.style.backgroundColor = "#b22222";
  }
}

function enviarReflexio(event) {
  event.preventDefault();
  const text = document.getElementById("reflexio").value;
  if (text.trim() === "") {
    document.getElementById("missatgeReflexio").innerText = "Escriu alguna cosa abans d'enviar.";
  } else {
    document.getElementById("missatgeReflexio").innerText = "Gràcies per la teva reflexió! S'ha desat correctament.";
    document.getElementById("reflexio").value = "";
  }
}
