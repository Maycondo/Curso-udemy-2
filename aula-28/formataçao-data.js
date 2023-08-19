function eroEsqueta() {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const Dia = data.getDate();
  const Mes = data.getMonth();
  const Ano = data.getFullYear();
  const Hora = data.getHours();
  const Min = data.getMinutes();
  const Seg = data.getSeconds();

  return `${Dia}/${Mes}/${Ano}/ Ás ${Hora} Horas é ${Min} minutos e ${Seg} segundos`;
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);
