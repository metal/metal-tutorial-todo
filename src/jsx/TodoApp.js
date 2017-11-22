'use strict';

import JSXComponent from 'metal-jsx';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

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

export {TodoApp}
export default TodoApp;
