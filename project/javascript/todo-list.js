const toDoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: '',
  dueDate: ''
}];

renderToDoList();

function renderToDoList() {
  let toDoListHTML = '';

  toDoList.forEach((toDoObject, index) => {
    const { name, dueDate } = toDoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>     
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    toDoListHTML += html;
  });
  
  document.querySelector('.js-to-do-list').innerHTML = toDoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        toDoList.splice(index, 1);
        renderToDoList();
      });
    })
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addToDo();
});

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