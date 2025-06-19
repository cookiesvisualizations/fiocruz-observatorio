document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as imagens dentro de .image e .image-grid
    const images = document.querySelectorAll('.image, .image-grid img');

    // Cria um IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;  // Aplica a opacidade 1
                entry.target.style.transform = 'translateY(0)'; // Remove a translação
                observer.unobserve(entry.target);  // Para de observar após a animação
            }
        });
    }, {
        threshold: 0.5  // O elemento deve estar pelo menos 50% visível na tela
    });

    // Adiciona um estilo inicial para as imagens (para o efeito de fade-in)
    images.forEach(image => {
        image.style.opacity = 0;
        image.style.transform = 'translateY(20px)'; // Suaviza a entrada vindo de baixo
        image.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        observer.observe(image); // Inicia a observação de cada imagem
    });
});


let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop && currentScroll > 50) {
    // ROLANDO PARA BAIXO: esconde
    navbar.classList.add("hide");
  } else if (currentScroll < lastScrollTop) {
    // ROLANDO PARA CIMA: mostra em modo pequeno
    navbar.classList.remove("hide");
    navbar.classList.add("shrink");
  }

  if (currentScroll <= 0) {
    // Volta ao tamanho normal no topo da página
    navbar.classList.remove("shrink");
  }

  lastScrollTop = currentScroll;
});


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Opcional: fecha menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});