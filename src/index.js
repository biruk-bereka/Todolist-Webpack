import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import clearCompleted from './modules/completed.js';
import addList from './modules/addTask.js';
import showList from './modules/showTasks.js';

const addButton = document.querySelector('.addList');
const clearButton = document.querySelector('.clear');

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const inputValue = document.querySelector('.listInput').value;
  if (inputValue !== '') addList(inputValue);
});

clearButton.addEventListener('click', () => {
  clearCompleted();
});

showList();
