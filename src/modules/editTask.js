import Todo from './todoList.js';

const todo = new Todo();

const editList = (listIndex, updatedValue) => {
  const listCollection = todo.getLists();
  const listUpdated = listCollection.map((list) => {
    if (list.index === listIndex) {
      return {
        ...list,
        description: updatedValue,
      };
    }
    return list;
  });
  todo.setList(listUpdated);
};

export default editList;