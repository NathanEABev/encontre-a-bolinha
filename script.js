window.alert('Atenção, a musica de fundo é alta, certifique-se do volume estar baixa')

window.onload = function () {
    const audio = new Audio("fundo.mp3");
    audio.loop = true; // Para repetir continuamente
    audio.play().catch(() => {
        let mAudio = window.confirm('Por algum motivo o audio não vai, deseja abilitar o display de audio no final da página')

        if(mAudio) {
            document.getElementsByTagName('audio')[0].style.display = 'block'
        }
    });
  };

var botMostra = document.getElementById("botao1")
botMostra.addEventListener("click", abriu)

var botFecha = document.getElementById("botao2")
botFecha.addEventListener("click", fechou)

var cont = document.getElementById("conteudo")

var canvas = document.getElementById("Mcanvas")

function abriu() {
    cont.style.display = "block"
}

function fechou() {
    cont.style.display = "none"
    canvas.style.display = "block"
    windowResized()
}