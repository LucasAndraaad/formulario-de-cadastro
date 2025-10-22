// ======== INTRODUÇÃO ANIMADA ========
window.addEventListener("load", () => {
  const intro = document.getElementById("intro-screen");

  // Aguarda 2.5 segundos e some suavemente
  setTimeout(() => {
    intro.classList.add("hidden");
  }, 2500);
});

// ======== MODO CLARO / ESCURO ========
const toggleButton = document.getElementById("toggle-theme");
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
  document.body.classList.add("modo-escuro");
  toggleButton.textContent = "🌙 Modo Escuro";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");

  if (document.body.classList.contains("modo-escuro")) {
    toggleButton.textContent = "🌙 Modo Escuro";
    localStorage.setItem("tema", "escuro");
  } else {
    toggleButton.textContent = "🌞 Modo Claro";
    localStorage.setItem("tema", "claro");
  }
});

// ======== CABEÇALHO AO ROLAR ========
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ======== SAUDAÇÃO DINÂMICA ========
const usuario = document.querySelector(".usuario");
const nomeSalvo = localStorage.getItem("nomeUsuario");

function mostrarBoasVindas(nome) {
  const msg = document.createElement("div");
  msg.classList.add("welcome-message");
  msg.textContent = `🐾 Bem-vindo(a), ${nome}!`;
  document.body.appendChild(msg);
  setTimeout(() => msg.classList.add("show"), 200);
  setTimeout(() => {
    msg.classList.remove("show");
    setTimeout(() => msg.remove(), 800);
  }, 4000);
}

if (!nomeSalvo) {
  const nome = prompt("Digite seu nome:");
  if (nome) {
    localStorage.setItem("nomeUsuario", nome);
    usuario.textContent = nome;
    mostrarBoasVindas(nome);
  }
} else {
  usuario.textContent = nomeSalvo;
  mostrarBoasVindas(nomeSalvo);
}
