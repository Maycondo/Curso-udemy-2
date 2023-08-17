const formSub = document.querySelector(".formulario");

formSub.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const inputPeso = evento.target.querySelector("#peso");
  const inputAltura = evento.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso invalido", false);
    return;
  }
  if (!altura) {
    setResultado("Altura invalido", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado();
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "obsidade grau 1",
    "Obesidade grau 2",
    "Obsidade grau 3",
  ];

  if (imc >= 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18.5) {
    return nivel[0];
  }
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#Resultado");
  resultado.innerHTML = "";

  const p = criaP();
  p.innerHTML = msg;
  resultado.appendChild(p);

  if (isValid){
    p.classList.add('paragrafo-resultado')
} else {
  p.classList.add('bad')
}

}
