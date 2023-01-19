import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import Todo from './modules/todoList.js';
import Status from './modules/status';

const todoClass = new Todo();
const updateStatus = new Status();
const addButton = document.querySelector('.addList');
const clearButton = document.querySelector('.clear');

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const inputValue = document.querySelector('.listInput').value;
  if (inputValue !== '') todoClass.addList();
});

clearButton.addEventListener('click', () => {
  updateStatus.clearCompleted();
});

todoClass.showList();
