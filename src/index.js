import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';

const todo = () => {
  const todolists = [
    {
      discription: 'Wash the dishes',
      completed: false,
      index: 2,
    },
    {
      discription: 'Go for shopping',
      completed: false,
      index: 3,
    },
    {
      discription: 'Compelete todolist project',
      completed: false,
      index: 1,
    },
  ];

  const todoListsWrapper = document.querySelector('.lists');
  todolists.sort((a, b) => a.index - b.index);
  todolists.forEach((list) => {
    const listWrapper = document.createElement('li');
    listWrapper.classList.add('list');
    listWrapper.innerHTML = `
          <div class="content">
          <button class="checkbox"></button>
          <p>${list.discription}</p>
        </div>
       <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
          `;
    todoListsWrapper.appendChild(listWrapper);
  });
};

todo();
