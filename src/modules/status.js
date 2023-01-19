import Todo from "./todoList.js";

export default class Status {
  status = (listIndex, checked) => {
    const todo = new Todo();
    const description = document.querySelector(`.desc-${listIndex}`);
    const listCollection = JSON.parse(localStorage.getItem("Lists"));
    let listUpdated = [];
    if (checked) {
      description.classList.add("completed");
      listUpdated = listCollection.map((list) => {
        if (list.index === listIndex) {
          return {
            ...list,
            completed: true,
          };
        }

        return list;
      });
    } else {
      description.classList.remove("completed");
      listUpdated = listCollection.map((list) => {
        if (list.index === listIndex) {
          return {
            ...list,
            completed: false,
          };
        }

        return list;
      });
    }
    localStorage.setItem("Lists", JSON.stringify(listUpdated));
  };

 clearCompleted = () => {
    const todo = new Todo();
    const listCollection = JSON.parse(localStorage.getItem("Lists"));
    const listUpdated = listCollection
      .filter((list) => !list.completed)
      .map((list, index) => ({
        ...list,
        index: index + 1,
      }));
    localStorage.setItem("Lists", JSON.stringify(listUpdated));
    todo.showList();
  };
}
