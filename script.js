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
