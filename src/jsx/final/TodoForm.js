'use strict';

import JSXComponent from 'metal-jsx';

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

export {TodoForm}
export default TodoForm;
