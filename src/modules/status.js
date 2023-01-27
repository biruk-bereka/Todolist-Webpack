import Todo from './todoList.js';

const todo = new Todo();
const status = (index, checked) => {
  const listCollection = todo.getLists();
  listCollection[index].completed = checked;
  todo.setList(listCollection);
};

export default status;
