document.addEventListener("DOMContentLoaded", () => {

    /*
    Captura o elemento de áudio
    */
    const audio = document.getElementById("audio-fragmento");

    /*
    Captura os botões
    */
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const restartBtn = document.getElementById("restartBtn");
    const pularBtn = document.getElementById("pularBtn");

    /*
    Captura o botão continuar
    */
    const proximoBtn = document.getElementById("proximoBtn");

    /*
    Botão Play
    */
    playBtn.addEventListener("click", () => {
        audio.play();
    });

    /*
    Botão Pause
    */
    pauseBtn.addEventListener("click", () => {
        audio.pause();
    });

    /*
    Botão Reiniciar
    */
    restartBtn.addEventListener("click", () => {

        /*
        Volta o áudio para o início
        */
        audio.currentTime = 0;

        /*
        Toca novamente
        */
        audio.play();

        /*
        Esconde o botão novamente
        */
        proximoBtn.style.display = "none";
    });

    /*
    Botão Pular
    */
    pularBtn.addEventListener("click", () => {
        audio.currentTime = audio.duration;
    });

    /*
    Evento executado quando o áudio termina
    */
    audio.addEventListener("ended", () => {

        /*
        Mostra o botão
        */
        proximoBtn.style.display = "inline-block";

        /*
        Adiciona classe de animação
        */
        proximoBtn.classList.add("mostrar");
    });

});