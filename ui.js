
// ui.js
// Script de interface para o Jogo Bíblico

console.log("UI.js carregado com sucesso.");

// Aqui você pode adicionar comportamentos extras da interface, se necessário
document.addEventListener('DOMContentLoaded', () => {
  // Exemplo: exibir no console quando o tema for alterado
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      console.log("Tema alterado para:", document.documentElement.getAttribute('data-theme'));
    });
  }

  // Exemplo: mostrar uma mensagem quando o jogo carregar
  if (typeof window.game !== "undefined") {
    console.log("Instância do jogo detectada:", window.game);
  } else {
    console.warn("Instância do jogo não encontrada. Verifique se game.js carregou corretamente.");
  }
});
