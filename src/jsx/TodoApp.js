'use strict';

import JSXComponent from 'metal-jsx';

import '../todo-app.scss';

class TodoApp extends JSXComponent {
	render() {
		return (
			<div class="todo-app">
				<ul>
					[TODO]
				</ul>
			</div>
		);
	}
}

class TodoForm extends JSXComponent {
	render() {
		return (
			<form class="todo-form">
				<label for="title">
					Todo
					<input
						name="title"
					/>
				</label>
				<button type="submit">Add</button>
			</form>
		);
	}
}

class TodoItem extends JSXComponent {
	render() {
		return (
			<li
				class="todo-item"
			>
				[TODO]
			</li>
		);
	}
}

export {TodoApp}
export default TodoApp;
