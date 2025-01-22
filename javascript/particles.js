// Número de bolhas a serem criadas
const bubbleCount = 100;

// Seleciona o container de partículas
const particlesContainer = document.querySelector('.bottom-particles');

// Função para criar bolhas
for (let i = 0; i < bubbleCount; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = `${Math.random() * 100}%`; // Posiciona aleatoriamente na horizontal
  bubble.style.animationDuration = `${5 + Math.random() * 10}s`; // Duração aleatória
  bubble.style.animationDelay = `${Math.random() * 5}s`; // Atraso aleatório
  particlesContainer.appendChild(bubble);
}