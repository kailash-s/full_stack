const toDoList = [{
  name: '',
  dueDate: ''
}];

renderToDoList();

function renderToDoList() {
  let toDoListHTML = '';

  for (let i = 0; i < toDoList.length; i++) {
    const toDoObject = toDoList[i];
    const { name, dueDate } = toDoObject;
    const html = `
      <p>
        ${name} ${dueDate}
        <button onclick="
          toDoList.splice(${i}, 1);
          renderToDoList();
        ">Delete</button>
      </p>
    `;
    toDoListHTML += html;
  }
  
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
}