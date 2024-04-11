const toDoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: '',
  dueDate: ''
}];

renderToDoList();

function renderToDoList() {
  let toDoListHTML = '';

  toDoList.forEach(function(toDoObject, index) {
    const { name, dueDate } = toDoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>     
      <button onclick="
        toDoList.splice(${index}, 1);
        renderToDoList();
        saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;
    toDoListHTML += html;
  });
  
  document.querySelector('.js-to-do-list').innerHTML = toDoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateInputElement.value;
  toDoList.push({
    name,
    dueDate
  });
  inputElement.value = '';
  renderToDoList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(toDoList));
}