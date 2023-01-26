import Todo from './todoList.js';
import showList from './showTasks.js';

const todo = new Todo();
const addList = (input) => {
  const newList = {
    description: input,
    completed: false,
    index: todo.getLists().length + 1,
  };
  todo.updateTodolistStorage(newList);
  showList();
  document.querySelector('.listInput').value = '';
};

export default addList;