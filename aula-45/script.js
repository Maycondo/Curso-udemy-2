const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const taferas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criarBTNapagar(li) {
  li.innerText += "";
  const BTNapagar = document.createElement("button");
  BTNapagar.innerHTML = "apagar";
  BTNapagar.setAttribute('class', 'apagar')
  BTNapagar.setAttribute('title', 'apagar essa tarefa')
  li.appendChild(BTNapagar);
}

function criaTarefa(textoinput) {
  const li = criaLi();
  li.innerText = textoinput;
  tarefas.appendChild(li);
  limpaInput();
  criarBTNapagar(li)
  salvaTarefas()
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});


document.addEventListener('click', function(e) {
  const el = e.target;

  if(el.classList.contains('pagar')) {
    el.parenElemetent.remove();
  }
})

function salvaTarefas() {
  const liTarefas = taferas.querySelectorAll('li')
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('apagar', '');
    listaDeTarefas.push(tarefaTexto)
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas() {
  const taferas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(taferas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }

}

adicionaTarefasSalvas();