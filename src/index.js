import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import Todo from './modules/todoList.js';

const todoClass = new Todo();
const addButton = document.querySelector('.addList');
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const inputValue = document.querySelector('.listInput').value;
  if (inputValue !== '') todoClass.addList();
});

todoClass.showList();
