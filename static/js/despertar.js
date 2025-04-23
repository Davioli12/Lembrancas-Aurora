document.addEventListener('DOMContentLoaded', () => {
    const memoria = sessionStorage.getItem('memoriaEscolhida');
    document.getElementById('lembranca').textContent = `"${memoria || 'Você não se lembra de nada...'}"`;
});

function escolher(opcao) {
    const final = document.getElementById('final');
    if (opcao === 'lembrar') {
        final.textContent = "Aurora lembrou. E agora, ela pode seguir em frente.";
    } else {
        final.textContent = "Aurora escolheu esquecer. E com isso, nasceu uma nova história...";
    }
}
