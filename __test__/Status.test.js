import Todo from '../src/modules/todoList.js';
import editList from '../src/modules/editTask.js';
import status from '../src/modules/status.js';
import clearCompleted from '../src/modules/completed.js';

const todo = new Todo();

describe('Test for Status Update', () => {
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

describe('Moch HTML to test for status updates', () => {
  beforeEach(() => {
    localStorage.clear();
    const todoList = [
      {
        description: 'Task one',
        completed: false,
        index: 1,
      },
      {
        description: 'Task Completed',
        completed: true,
        index: 1,
      },
    ];
    todo.setList(todoList);
  });

  test('Edit description DOM element', () => {
    editList(0, 'Edited Value');

    const list = todo.getLists();

    const lists = document.querySelector('.lists');

    lists.innerHTML = `
    <li class="list">
    <div class="content c-${list[0].index}">
    <input type="checkbox" id="checkbox-${list[0].index}" class="checkbox ${list[0].completed}">
    <p class="description desc-${list[0].index}">${list[0].description}</p>
  </div>
  <div class="editButton button-${list[0].index}">
      <button type="button" class="delete"><i class="fa-solid fa-trash-can"></i></button>  
  </div>
    </li>
     `;

    const descriptionElement = document.querySelector(`.desc-${list[0].index}`);
    expect(descriptionElement.textContent).toBe('Edited Value');
  });

  test('Test for DOM element checkbox is checked: ', () => {
    status(0, true);
    const list = todo.getLists();

    const lists = document.querySelector('.lists');

    lists.innerHTML = `
       <li class="list">
       <div class="content c-${list[0].index}">
       <input type="checkbox" id="checkbox-${list[0].index}" class="checkbox ${list[0].completed}">
       <p class="description desc-${list[0].index}">${list[0].description}</p>
     </div>
     <div class="editButton button-${list[0].index}">
         <button type="button" class="delete"><i class="fa-solid fa-trash-can"></i></button>  
     </div>
       </li>
     `;

    const checkBox = document.getElementById(`checkbox-${list[0].index}`);
    expect(checkBox.className).toBe('checkbox true');
  });

  test('Clear completed button element test: ', () => {
    clearCompleted();
    const todoLists = todo.getLists();
    const lists = document.querySelector('.lists');
    todoLists.forEach((list) => {
      const listWrapper = document.createElement('li');
      listWrapper.classList.add('lsit');
      listWrapper.innerHTML = `
        <div class="content c-${list.index}">
        <input type="checkbox" id="checkbox-${list.index}" class="checkbox ${list.completed}">
        <p class="description desc-${list.index}">${list.description}</p>
      </div>
      <div class="editButton button-${list.index}">
          <button type="button" class="delete"><i class="fa-solid fa-trash-can"></i></button>  
      </div>`;
      lists.appendChild(listWrapper);
    });
    const listElements = document.querySelectorAll('.lists .list');

    expect(listElements).toHaveLength(1);
  });
});
