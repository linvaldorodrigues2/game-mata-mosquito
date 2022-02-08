function iniciaJogo() {
  var nivel = document.getElementById("nivel").value;

  if (nivel === "selecione") {
    alert("Selecione um nivel");
    return false;
  }
  window.location.href = "app.html?" + nivel;
}
