function criaHoraDosSegundos(segundos){
    const data = new Date(segundos)
    return data.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone: 'UTM'
    });
}


const relogio = document.querySelector('.Relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0;

function iniciaRelogio() {
    const timer = setInterval(function(){
        segundos++;
        relogio
    },1000)
}

iniciar.addEventListener('click', function(evento){
    relogio.innerHTML = 'clliquei no iniciar';
})

pausar.addEventListener('click', function(evento){
    alert('clliquei no iniciar');
})

zerar.addEventListener('click', function(evento){
    alert('clliquei no iniciar');
})