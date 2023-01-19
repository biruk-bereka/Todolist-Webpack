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
  };

  #updateTodolistStorage = (list) => {
    if (list === '') return this.#getLists();
    this.todoListCollection = this.#getLists();
    this.todoListCollection.push(list);
    return this.#setList(this.todoListCollection);
  };

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

  deleteList = (listIndex) => {
    const listCollection = this.#getLists();
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
    this.#setList(listUpdated);
    this.showList();
  };

  showList() {
    const todoLists = this.#getLists();
    if (todoLists.length > 0) {
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
              <p contentEditable="true" class="description">${list.description}</p>
            </div>
            <div class="editButton button-${list.index}">
                <button type="button" class="delete"><i class="fa-solid fa-trash-can"></i></button>  
                <button type="button" class="move"><i class="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
              `;
        todoListsWrapper.appendChild(listWrapper);
      });
      const deleteButton = document.querySelectorAll('.delete');
      deleteButton.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          this.deleteList(index + 1);
        });
      });
    } else {
      const todoListsWrapper = document.querySelector('.lists');
      todoListsWrapper.innerHTML = '';
    }
  }
}
