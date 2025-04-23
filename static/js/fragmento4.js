const falas = [
    { texto: "Quem sou eu...?", audio: "voz1.mp3" },
    { texto: "Por que esqueci tudo?", audio: "voz2.mp3" },
    { texto: "Será que alguém me espera lá fora?", audio: "voz3.mp3" },
    { texto: "Estou pronta para lembrar...", audio: "voz4.mp3" },
];

let atual = 0;
const falaDiv = document.getElementById('fala');
const voz = document.getElementById('voz');
const btn = document.getElementById('btnFala');
const prox = document.getElementById('proximo4');

btn.addEventListener('click', () => {
    if (atual < falas.length) {
        const f = falas[atual];
        falaDiv.textContent = f.texto;
        voz.src = `/static/audio/${f.audio}`;
        voz.play();
        atual++;

        if (atual === falas.length) {
            prox.classList.remove('escondido');
        }
    }
});
