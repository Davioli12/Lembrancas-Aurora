document.addEventListener('DOMContentLoaded', () => {
    const memorias = document.querySelectorAll('.memoria');
    const texto = document.getElementById('texto-memoria');
    const proximo = document.getElementById('proximo');
    let clicadas = new Set();

    memorias.forEach(memoria => {
        memoria.addEventListener('click', () => {
            const frase = memoria.getAttribute('data-text');
            texto.textContent = frase;
            clicadas.add(memoria.src);

            if (clicadas.size === memorias.length) {
                proximo.classList.remove('escondido');
            }
        });
    });
});
