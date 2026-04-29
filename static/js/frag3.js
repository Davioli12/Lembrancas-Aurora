document.addEventListener("DOMContentLoaded", () => {

    /*
    Captura o áudio
    */
    const audio = document.getElementById("audio-fragmento");

    /*
    Captura os botões
    */
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const restartBtn = document.getElementById("restartBtn");

    /*
    Botão de continuar
    */
    const proximoBtn = document.getElementById("proximoBtn");

    /*
    Play
    */
    playBtn.addEventListener("click", () => {
        audio.play();
    });

    /*
    Pause
    */
    pauseBtn.addEventListener("click", () => {
        audio.pause();
    });

    /*
    Reiniciar
    */
    restartBtn.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();

        /*
        Oculta novamente o botão
        caso o áudio reinicie
        */
        proximoBtn.style.display = "none";
    });

    /*
    Quando o áudio terminar
    */
    audio.addEventListener("ended", () => {

        /*
        Mostra o botão
        */
        proximoBtn.style.display = "inline-block";

        /*
        Adiciona animação opcional
        */
        proximoBtn.style.display = 'flex';
    });

});