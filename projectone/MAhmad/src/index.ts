import { TodoList } from "./todoList";

let allTodo: TodoList = new TodoList();

allTodo.addTodo('task');
allTodo.addTodo('task2');
allTodo.addTodo('task3');

allTodo.completeTodo(1);

allTodo.printTodos();