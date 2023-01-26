import Status from './status.js';
import Todo from './todoList.js';
import deleteList from './deleteTask.js';
import editList from './editTask.js';

const todo = new Todo();

const showList = () => {
  const todoLists = todo.getLists();
  if (todoLists.length > 0) {
    todoLists.sort((a, b) => a.index - b.index);
    const todoListsWrapper = document.querySelector('.lists');
    todoListsWrapper.innerHTML = '';
    todoLists.forEach((list) => {
      const listWrapper = document.createElement('li');
      listWrapper.innerHTML = '';
      listWrapper.classList.add('list');
      listWrapper.innerHTML = `
            <div class="content c-${list.index}">
              <input type="checkbox" id="checkbox-${list.index}" class="checkbox">
              <p class="description desc-${list.index}">${list.description}</p>
            </div>
            <div class="editButton button-${list.index}">
                <button type="button" class="delete"><i class="fa-solid fa-trash-can"></i></button>  
            </div>
              `;
      todoListsWrapper.appendChild(listWrapper);
    });

    const checkboxAll = document.querySelectorAll('.checkbox');
    checkboxAll.forEach((checkBox, index) => {
      if (todoLists[index].completed) {
        checkBox.checked = true;
        const description = document.querySelector(`.desc-${index + 1}`);
        description.classList.add('completed');
      }
    });

    const deleteButton = document.querySelectorAll('.delete');
    deleteButton.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        btn.parentElement.parentElement.remove();
        deleteList(index + 1);
      });
    });

    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach((descriptionElement, index) => {
      descriptionElement.addEventListener('click', () => {
        const listCollection = todo.getLists();
        const { description } = listCollection[index];
        const editForm = document.querySelector(`.c-${index + 1}`);
        editForm.innerHTML = `
          <form action="">
            <i class="fa-solid fa-pencil"></i>
            <input class="editInput" type="text" value="${description}"/>
            <button class="editList"><i class="fa-solid fa-check"></i></button>
         </form>
       `;
        const editListButton = document.querySelector('.editList');
        editListButton.addEventListener('click', (event) => {
          event.preventDefault();
          const editedValue = document.querySelector('.editInput').value;
          if (editedValue !== '') {
            editList(index + 1, editedValue);
            showList();
          }
        });
      });
    });

    const checkboxButtons = document.querySelectorAll('.checkbox');
    checkboxButtons.forEach((btn, index) => {
      btn.addEventListener('click', (event) => {
        const statusUpdate = new Status();
        statusUpdate.status(index + 1, event.target.checked);
      });
    });
  } else {
    const todoListsWrapper = document.querySelector('.lists');
    todoListsWrapper.innerHTML = '';
  }
};

export default showList;