import Todo from '../src/modules/todoList.js';
import editList from '../src/modules/editTask.js';
import status from '../src/modules/status.js';
import clearCompleted from '../src/modules/completed.js';

describe('Test for Status Update', () => {
  const todo = new Todo();
  beforeEach(() => {
    localStorage.clear();
    const todoList = [
      {
        description: 'Task one',
        completed: false,
        index: 1,
      },
      {
        description: 'Task two',
        completed: true,
        index: 2,
      },
    ];
    todo.setList(todoList);
  });

  test('Edit task function test: ', () => {
    editList(0, 'Edited value');
    const todoList = todo.getLists();
    expect(todoList[0].description).toStrictEqual('Edited value');
  });

  test('Status completed function test: ', () => {
    status(0, true);
    const todoList = todo.getLists();
    expect(todoList[0].completed).toBe(true);
  });

  test('Clear completed function test:', () => {
    clearCompleted();
    expect(todo.getLists().length).toBe(1);
  });
});

