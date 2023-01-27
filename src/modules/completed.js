import showList from './showTasks.js';
import Todo from './todoList.js';

const todo = new Todo();

const clearCompleted = () => {
  let listCollection = todo.getLists();
  listCollection = listCollection
    .filter((list) => !list.completed)
    .map((list, index) => ({
      ...list,
      index: index + 1,
    }));
  todo.setList(listCollection);
  showList();
};
export default clearCompleted;
