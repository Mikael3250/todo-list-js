let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem('@listaTarefas')) || [];

function renderTarefas() {
  listElement.innerHTML = "";
  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("X");
    linkElement.appendChild(linkText);
    let posicao = tarefas.indexOf(todo);
    linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);
    liElement.appendChild(tarefaText);
    listElement.appendChild(liElement);
    liElement.appendChild(linkElement);
  });
}

renderTarefas()

function adicionarList() {
  if (inputElement.value === "") {
    alert("Preencha o campo com uma tarefa");
    return false;
  } else {
    let novaTarefa = inputElement.value;
    tarefas.push(novaTarefa);
    inputElement.value = "";
    renderTarefas();
    salvarDados ()
  }
}

buttonElement.onclick = adicionarList;

function deletarTarefa(posicao) {
  tarefas.splice(posicao, 1)
  renderTarefas();
  salvarDados ()
}

function salvarDados () {
   localStorage.setItem('@listaTarefas', JSON.stringify(tarefas))
}