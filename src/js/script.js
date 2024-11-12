let form = document.getElementById('form');
let inputTask = document.getElementById('inputTask');
let taskArea = document.getElementsByClassName('area');
let taskList = document.getElementById('taskList'); // ul
let tarefas = JSON.parse(localStorage.getItem('@tarefas')) || [];
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (inputTask.value === '') {
    alert('Digite uma tarefa!');
    return false;
  } else {
    let novaTarefa = inputTask.value;
    inputTask.value = '';
    tarefas.push(novaTarefa);

  }
  renderTask();
  saveData();
})
renderTask();

function renderTask() {
  taskList.innerHTML = '';
  tarefas.map((todo) => {
    let li = document.createElement('li');
    let tarefaText = document.createTextNode(todo);
    li.appendChild(tarefaText);
    taskList.appendChild(li);

    let linkTask = document.createElement('a')
    linkTask.setAttribute('href', '#');
    linkTask.textContent = 'Excluir';
    li.appendChild(linkTask);


    let posicao = tarefas.indexOf(todo)
    linkTask.setAttribute('onclick', `deleteTask(${posicao})`)
  })
}

function deleteTask(todo) {
  tarefas.splice(todo, 1);
  renderTask();
  saveData();
}

function saveData() {
  localStorage.setItem('@tarefas', JSON.stringify(tarefas));
  renderTask();
}