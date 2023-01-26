import Todo from "../src/modules/todoList.js";
import addList from "../src/modules/addTask.js";
import deleteList from "../src/modules/deleteTask.js";
import showList from "../src/modules/showTasks.js";

const todo = new Todo();

describe("Todo list functions test case: ", () => {
  const task = "Task one";
  const todoList = [
    {
      description: task,
      completed: false,
      index: 1,
    },
  ];

  describe("Add item test case: ", () => {
    test("test 1", () => {
      addList(task);
      expect(todo.getLists().length).not.toBe(0);
    });

    test("test 2", () => {
      expect(todo.getLists()).toStrictEqual(todoList);
    });
  });

  describe("Delete an item test case: ", () => {
    test("test 1", () => {
      deleteList(1);
      expect(todo.getLists().length).toBe(0);
    });
  });
});

describe("Mock HTML to check add/remove li element: ", () => {
  const list = {
    description: "Test 1",
    completed: false,
    index: 1,
  };

  const lists = document.querySelector(".lists");

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

  test("Mock HTML to add exactly one li element", () => {
    const listItems = document.querySelectorAll(".lists li");
    expect(listItems).toHaveLength(1);
  });

  test("Mock HTML to remove exactly one li element", () => {
    lists.firstElementChild.remove();
    const listItems = document.querySelectorAll(".lists list");
    expect(listItems).toHaveLength(0);
  });
});
