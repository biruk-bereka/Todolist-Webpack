import Todo from './todoList.js';

const todo = new Todo();

const editList = (listIndex, updatedValue) => {
  const listCollection = todo.getLists();
  listCollection[listIndex].description = updatedValue;
  todo.setList(listCollection);
};

export default editList;