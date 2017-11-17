'use strict';

import JSXComponent from 'metal-jsx';

import '../../todo-app.scss';

class TodoApp extends JSXComponent {
	render() {
		return (
			<div class="todo-app">
				<ul>
					{this.state.todos.map((todo, index) => {
						return (
							<TodoItem
								events={{
									todoClick: this.handleTodoClick.bind(this)
								}}
								index={index}
								todo={todo}
							/>
						);
					})}
				</ul>

				<TodoForm
					events={{
						todoAdd: this.handleTodoAdd.bind(this)
					}}
				 />
			</div>
		);
	}

	addTodo(title) {
		this.state.todos = [...this.state.todos, {
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
		this.state.todos = this.state.todos.map((todo, index) => {
			if (todoIndex == index) {
				todo = Object.assign({}, todo, {
					done: !todo.done
				});
			}
			return todo;
		});
	}
}

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

class TodoForm extends JSXComponent {
	render() {
		return (
			<form class="todo-form" data-onsubmit={this.handleSubmit.bind(this)}>
				<label for="title">
					Todo
					<input
						data-onkeyup={this.handleChange.bind(this)}
						name="title"
						value={this.state.value}
					/>
				</label>
				<button type="submit">Add</button>
			</form>
		);
	}

	handleSubmit(event) {
		event.preventDefault();

		if (this.state.value) {
			this.emit('todoAdd', {
				title: this.state.value
			});

			this.state.value = '';
		}
	}

	handleChange(event) {
		this.state.value = event.target.value;
	}
}

TodoForm.STATE = {
	value: {
		value: ''
	}
};

class TodoItem extends JSXComponent {
	render() {
		let elementClasses = `todo-item${this.props.todo.done ? ' todo-item-done' : ''}`;

		return (
			<li
				class={elementClasses}
				data-onclick={this.handleClick.bind(this)}
			>
				{this.props.todo.title}
			</li>
		);
	}

	handleClick(event) {
		this.emit('todoClick', {
			index: this.props.index
		});
	}
}

TodoItem.PROPS = {
	index: {
		value: null
	},

	todo: {
		value: null
	}
};

export {TodoApp}
export default TodoApp;
