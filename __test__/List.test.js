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

describe('Mock HTML to check add/remove li element: ', () => {
  const list = {
    description: 'Test 1',
    completed: false,
    index: 1,
  };

  const lists = document.querySelector('.lists');

  lists.innerHTML = `
     <li class="list">
        <div class="content c-${list.index}">
            <input type="checkbox" id="checkbox-${list.index}" class="checkbox">
            <p class="description desc-${list.index}">${list.description}</p>
       </div>
        <div class="editButton button-${list.index}">
            <button type="button" class="delete"><i class="fa-solid fa-trash-can"></i></button>  
        </div> 
     </li>
   `;

  test('Mock HTML to add exactly one li element', () => {
    const listItems = document.querySelectorAll('.lists li');
    expect(listItems).toHaveLength(1);
  });

  test('Mock HTML to remove exactly one li element', () => {
    lists.firstElementChild.remove();
    const listItems = document.querySelectorAll('.lists li');
    expect(listItems).toHaveLength(0);
  });
});
