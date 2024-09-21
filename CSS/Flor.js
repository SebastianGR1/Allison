onload = () => {
    document.body.classList.remove("container");
  };

  document.addEventListener('DOMContentLoaded', () => {
    // Reproducir el audio al cargar la página
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.error('Error al intentar reproducir el audio:', error);
    });

    // Seleccionar todas las burbujas
    const bubbles = document.querySelectorAll('.bubble');
    
    // Función para animar las burbujas
    const animateBubble = (bubble) => {
        const animationDuration = Math.random() * 10 + 5; // Duración aleatoria entre 5s y 15s
        const animationDelay = Math.random() * 5; // Retraso aleatorio entre 0s y 5s
        const translateX = Math.random() * 200 - 100; // Movimiento horizontal aleatorio
        const translateY = Math.random() * 300 - 150; // Movimiento vertical aleatorio
        
        bubble.style.animation = `bubbleAnimation ${animationDuration}s ${animationDelay}s infinite`;
        bubble.style.transform = `translate(${translateX}px, ${translateY}px)`;
    };
    
    // Aplicar animación a cada burbuja
    bubbles.forEach(bubble => {
        animateBubble(bubble);
    });

    // Añadir keyframes para la animación de burbujas
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
        @keyframes bubbleAnimation {
            0% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);

    // Añadir eventos para flores
    const flowers = document.querySelectorAll('.flower');

    flowers.forEach(flower => {
        flower.addEventListener('mouseover', () => {
            flower.classList.add('flower--hover');
        });

        flower.addEventListener('mouseout', () => {
            flower.classList.remove('flower--hover');
        });
    });
});
