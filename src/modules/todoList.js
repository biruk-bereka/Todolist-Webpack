export default class Todo {
  constructor() {
    this.todoListCollection = [];
  }

    #setList = (list) => {
      localStorage.setItem('Lists', JSON.stringify(list));
    };

    #getLists = () => {
      const lists = JSON.parse(localStorage.getItem('Lists'));
      if (lists) return lists;
      return [];
    }

    #updateTodolistStorage = (list) => {
      if (list === '') return this.#getLists();
      this.todoListCollection = this.#getLists();
      this.todoListCollection.push(list);
      return this.#setList(this.todoListCollection);
    }

    addList() {
      const newList = {
        description: document.querySelector('.listInput').value,
        completed: false,
        index: this.#getLists().length + 1,
      };
      this.#updateTodolistStorage(newList);
      this.showList();
      document.querySelector('.listInput').value = '';
    }

    showList() {
      const todoLists = this.#getLists();
      todoLists.sort((a, b) => a.index - b.index);
      const todoListsWrapper = document.querySelector('.lists');
      todoListsWrapper.innerHTML = '';
      todoLists.forEach((list) => {
        const listWrapper = document.createElement('li');
        listWrapper.innerHTML = '';
        listWrapper.classList.add('list');
        listWrapper.innerHTML = `
              <div class="content">
              <button class="checkbox"></button>
              <p contentEditable="true" class="description">${list.description} , ${list.index}</p>
            </div>
           <button class="edit"><i class="fa-solid fa-ellipsis-vertical"></i></button>
              `;
        todoListsWrapper.appendChild(listWrapper);
      });
    }
}