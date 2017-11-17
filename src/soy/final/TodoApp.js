'use strict';

import templates from './TodoApp.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './TodoForm';
import './TodoItem';

import '../../todo-app.scss';

class TodoApp extends Component {
	addTodo(title) {
		this.todos = [...this.todos, {
			done: false,
			title
		}];
	}

	handleTodoAdd(event) {
		this.addTodo(event.title);
	}

	handleTodoClick(event) {
		this.toggleTodo(event.index);
	}

	toggleTodo(todoIndex) {
		this.todos = this.todos.map((todo, index) => {
			if (todoIndex == index) {
				todo = Object.assign({}, todo, {
					done: !todo.done
				});
			}
			return todo;
		});
	}
}
Soy.register(TodoApp, templates);

TodoApp.STATE = {
	todos: {
		value: [
			{
				done: false,
				title: 'Todo 1'
			},
			{
				done: false,
				title: 'Todo 2'
			}
		]
	}
};

export { TodoApp };
export default TodoApp;
