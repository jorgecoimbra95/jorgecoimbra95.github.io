
document.getElementById("lang-toggle").addEventListener("click", () => {
  alert("Tradução ainda não disponível. Em breve em inglês.");
});

function aceitarCookies() {
  localStorage.setItem("cookies", "aceitos");
  document.getElementById("cookie-banner").style.display = "none";
}

window.onload = () => {
  if (!localStorage.getItem("cookies")) {
    document.getElementById("cookie-banner").style.display = "block";
  }
};
