export default class Todo {
  constructor() {
    this.todoListCollection = [];
  }

  setList = (list) => {
    localStorage.setItem('Lists', JSON.stringify(list));
  };

  getLists = () => {
    const lists = JSON.parse(localStorage.getItem('Lists'));
    if (lists) return lists;
    return [];
  };

  updateTodolistStorage = (list) => {
    if (list === '') return this.getLists();
    this.todoListCollection = this.getLists();
    this.todoListCollection.push(list);
    return this.setList(this.todoListCollection);
  };
}
