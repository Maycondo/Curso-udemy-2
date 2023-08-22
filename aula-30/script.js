const DatadeHOJE = document.querySelector("#dateTexto");
const DateMesAno = new Date();
DatadeHOJE.innerHTML = DateMesAno.toString();

function getDiaSemanaTexto(diaSemana) {
  let diaSemana;

  switch (diaSemana) {
    case 0:
    diaSemanaTexto = "Domingo";
    return diaSemanaTexto;
    case 1: 
    diaSemanaTexto = "Segunda-feira"
    case 2:
    diaSemanaTexto = "Terça-feira" 
    case 3:
    diaSemanaTexto = "Quarta-feira"
    case 4:
    diaSemanaTexto = "Quinta-feira"
    case 5:
    diaSemanaTexto = "Sexta-feira"
    case 6:
      diaSemanaTexto = "Sabado"
      
  }
}