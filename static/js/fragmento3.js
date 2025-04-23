let ordem = [];
const correta = ['1', '3', '2']; // Lampada > Janela > Gravador

document.querySelectorAll('.objeto').forEach(obj => {
    obj.addEventListener('click', () => {
        ordem.push(obj.dataset.id);
        if (ordem.length === 3) {
            if (ordem.join() === correta.join()) {
                document.getElementById('mensagemPuzzle').textContent = "A chuva voltou... e com ela, a lembrança.";
                document.getElementById('proximo3').classList.remove('escondido');
            } else {
                document.getElementById('mensagemPuzzle').textContent = "Algo está fora de ordem...";
                ordem = [];
            }
        }
    });
});
