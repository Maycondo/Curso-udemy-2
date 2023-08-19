let datadeHOJE = document.querySelector("#dateTexto");
const DateMesAno = new Date();
datadeHOJE.innerHTML = DateMesAno.toString();

function getDiaSemanaTexto(diaSemana) {
    let diaSemana

  if (diaSemana === 0) {
    diaSemanaTexto = "Domingo";
  } else if (diaSemana === 1) {
    diaSemanaTexto = "Segunda-Feira";
  } else if (diaSemana === 2) {
    diaSemanaTexto = "Terça-Feira";
  } else if (diaSemana === 3) {
    diaSemanaTexto = "Quarta-Feira";
  } else if (diaSemana === 4) {
    diaSemanaTexto = "Quinta-Feira";
  } else if (diaSemana === 5) {
    diaSemanaTexto = "Sexta-Feira";
  } else if (diaSemana === 6) {
    diaSemanaTexto = "Sábado";
  }
}
