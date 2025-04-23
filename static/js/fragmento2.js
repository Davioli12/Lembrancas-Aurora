document.addEventListener('DOMContentLoaded', () => {
    const espelhos = document.querySelectorAll('.espelho');
    const texto = document.getElementById('memoria-escolhida');
    const proximo = document.getElementById('proximo2');

    espelhos.forEach(espelho => {
        espelho.addEventListener('click', () => {
            const frase = espelho.getAttribute('data-memoria');
            texto.textContent = frase;

            // Desabilita os outros espelhos
            espelhos.forEach(e => e.style.pointerEvents = 'none');

            // Guarda escolha no sessionStorage para o final
            sessionStorage.setItem('memoriaEscolhida', frase);
            proximo.classList.remove('escondido');
        });
    });
});
