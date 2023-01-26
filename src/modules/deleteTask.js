import Todo from './todoList.js';

const todo = new Todo();

const deleteList = (listIndex) => {
  const listCollection = todo.getLists();
  const listUpdated = listCollection
    .filter((list, index) => index + 1 !== listIndex)
    .map((list) => {
      if (list.index > listIndex) {
        return {
          ...list,
          index: list.index - 1,
        };
      }
      return list;
    });
  todo.setList(listUpdated);
};

export default deleteList;