import Todo from '../src/modules/todoList.js';
import editList from '../src/modules/editTask.js';
import addList from '../src/modules/addTask.js';

const todo = new Todo();

describe('Edit Task function test', () => {
  const task = 'Task one';
  addList(task);
  test('test 1', () => {
    editList(0, 'Edited value');
    const todoList = todo.getLists();
    expect(todoList[0].description).toStrictEqual('Edited value');
  });
});
