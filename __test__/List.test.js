import Todo from '../src/modules/todoList.js';

const todo = new Todo();

describe('Todo list functions test case: ', () => {
  const todoList = [
    {
      description: '',
      completed: false,
      index: 1,
    },
  ];
  describe('Add item test case: ', () => {
    test('test 1', () => {
      todo.addList();
      expect(todo.getLists().length).toBe(1);
    });

    test('test 2', () => {
      expect(todo.getLists()).toStrictEqual(todoList);
    });
  });
  describe('Delete an item test case: ', () => {
    test('test 1', () => {
      todo.deleteList(1);
      expect(todo.getLists().length).toBe(0);
    });

    test('test 2', () => {
      todo.addList();
      todo.addList();
      todo.deleteList(1);
      expect(todo.getLists().length).toBe(1);
    });
  });
});
