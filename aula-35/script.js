const Paragrafos = document.querySelector(".paragrafos");
const ps = Paragrafos.querySelectorAll("p");

const estiloBody = getComputedStyle(document.body);
const backColordBody = estiloBody.;

for (let p of ps) {
  p.style.backgroundColor = backColordBody;
}
